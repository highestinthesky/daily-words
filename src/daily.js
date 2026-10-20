const TIME_ZONE = 'America/New_York';
export const LAUNCH_DATE = '2026-09-23';
const DAY_MS = 86_400_000;
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function hash(value) {
  let result = 2166136261;
  for (const character of String(value)) {
    result ^= character.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function dateToDay(dateKey) {
  return Math.max(0, Math.round((Date.parse(`${dateKey}T00:00:00Z`) - Date.parse(`${LAUNCH_DATE}T00:00:00Z`)) / DAY_MS));
}

function dayToDate(dayIndex) {
  return new Date(Date.parse(`${LAUNCH_DATE}T00:00:00Z`) + dayIndex * DAY_MS).toISOString().slice(0, 10);
}

function firstOrdinal(dayIndex) {
  return dayIndex < 7 ? dayIndex * 5 : 35 + (dayIndex - 7) * 4;
}

function orderBank(bank) {
  const order = Array.from({ length: bank.length }, (_, index) => index);
  let state = hash('well-said-edition-one');
  for (let index = order.length - 1; index > 0; index -= 1) {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    const swap = (state >>> 0) % (index + 1);
    [order[index], order[swap]] = [order[swap], order[index]];
  }

  // The opening edition sets the tone; the remaining entries keep their
  // deterministic shuffled order and still appear before any repeat.
  const openingWords = ['equanimous', 'mellifluous', 'acumen', 'elucidate', 'ineffable'];
  const opening = openingWords.map((word) => bank.findIndex((entry) => entry.word === word)).filter((index) => index >= 0);
  const openingSet = new Set(opening);
  return [...opening, ...order.filter((index) => !openingSet.has(index))];
}

// A schedule is either one word bank or a list of { from, words } eras. A new
// era replaces the bank from its date on, so earlier editions never change.
const schedules = new WeakMap();

function getSchedule(banks) {
  if (schedules.has(banks)) return schedules.get(banks);
  const eras = banks[0]?.words ? banks : [{ from: LAUNCH_DATE, words: banks }];
  const schedule = [];
  for (const { from, words } of eras) {
    if (words.length < 10) throw new Error('The word bank needs at least ten entries.');
    const start = firstOrdinal(dateToDay(from));
    const order = orderBank(words).map((index) => words[index]);
    if (schedule.length === 0) {
      schedule.push({ start, words, order });
      continue;
    }
    // Words already introduced go to the back, so the new era leads with words nobody has seen.
    const shown = new Set(Array.from({ length: start }, (_, ordinal) => entryAt(schedule, ordinal).word));
    schedule.push({
      start,
      words,
      order: [...order.filter(({ word }) => !shown.has(word)), ...order.filter(({ word }) => shown.has(word))],
    });
  }
  schedules.set(banks, schedule);
  return schedule;
}

function eraAt(schedule, ordinal) {
  return schedule.findLast((era) => era.start <= ordinal) ?? schedule[0];
}

function entryAt(schedule, ordinal) {
  const { start, order } = eraAt(schedule, ordinal);
  const offset = ordinal - start;
  const cycle = Math.floor(offset / order.length);
  return order[(offset % order.length + cycle) % order.length];
}

export function getEditorialDate(instant = new Date()) {
  const parts = Object.fromEntries(formatter.formatToParts(instant).map(({ type, value }) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function getNewWords(dayIndex, banks) {
  const schedule = getSchedule(banks);
  const count = dayIndex < 7 ? 5 : 4;
  const start = firstOrdinal(dayIndex);
  return Array.from({ length: count }, (_, index) => entryAt(schedule, start + index));
}

export function getDailyEdition(dateKey, banks) {
  const dayIndex = dateToDay(dateKey);
  const newWords = getNewWords(dayIndex, banks);
  const words = newWords.map((entry) => ({ ...entry, isReview: false }));

  if (dayIndex >= 7) {
    const firstLag = 2 + (hash(`lag-${dayIndex}`) % 5);
    const used = new Set(newWords.map((entry) => entry.word));
    // Words dropped from the current bank are not brought back for review.
    const current = new Set(eraAt(getSchedule(banks), firstOrdinal(dayIndex)).words.map((entry) => entry.word));
    let review;
    let sourceDay;

    for (let attempt = 0; attempt < 5 && !review; attempt += 1) {
      const lag = 2 + ((firstLag - 2 + attempt) % 5);
      sourceDay = dayIndex - lag;
      const source = getNewWords(sourceDay, banks);
      const firstPosition = hash(`review-${dayIndex}-${lag}`) % source.length;
      for (let index = 0; index < source.length; index += 1) {
        const candidate = source[(firstPosition + index) % source.length];
        if (!used.has(candidate.word) && current.has(candidate.word)) {
          review = candidate;
          break;
        }
      }
    }

    if (!review) throw new Error('Could not select a distinct review word.');
    const insertAt = 1 + (hash(`slot-${dayIndex}`) % 4);
    words.splice(insertAt, 0, { ...review, isReview: true, reviewedFrom: dayToDate(sourceDay) });
  }

  return { dateKey, words };
}

// Every word shown from launch through `dateKey`, alphabetized, with each date it appeared.
export function getWordHistory(dateKey, banks) {
  const history = new Map();
  for (let day = 0; day <= dateToDay(dateKey); day += 1) {
    const date = dayToDate(day);
    for (const entry of getDailyEdition(date, banks).words) {
      const { isReview, reviewedFrom, ...word } = entry;
      if (!history.has(word.word)) history.set(word.word, { ...word, appearances: [] });
      history.get(word.word).appearances.push({ date, isReview });
    }
  }
  return [...history.values()].sort((a, b) => a.word.localeCompare(b.word));
}
