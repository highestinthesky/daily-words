const TIME_ZONE = 'America/New_York';
const LAUNCH_DATE = '2026-09-23';
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

export function getEditorialDate(instant = new Date()) {
  const parts = Object.fromEntries(formatter.formatToParts(instant).map(({ type, value }) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function getNewWords(dayIndex, bank) {
  if (bank.length < 10) throw new Error('The word bank needs at least ten entries.');
  const count = dayIndex < 7 ? 5 : 4;
  const start = dayIndex < 7 ? dayIndex * 5 : 35 + (dayIndex - 7) * 4;
  const order = orderBank(bank);
  return Array.from({ length: count }, (_, index) => {
    const ordinal = start + index;
    const cycle = Math.floor(ordinal / bank.length);
    const position = (ordinal % bank.length + cycle) % bank.length;
    return bank[order[position]];
  });
}

export function getDailyEdition(dateKey, bank) {
  const dayIndex = dateToDay(dateKey);
  const newWords = getNewWords(dayIndex, bank);
  const words = newWords.map((entry) => ({ ...entry, isReview: false }));

  if (dayIndex >= 7) {
    const firstLag = 2 + (hash(`lag-${dayIndex}`) % 5);
    const used = new Set(newWords.map((entry) => entry.word));
    let review;
    let sourceDay;

    for (let attempt = 0; attempt < 5 && !review; attempt += 1) {
      const lag = 2 + ((firstLag - 2 + attempt) % 5);
      sourceDay = dayIndex - lag;
      const source = getNewWords(sourceDay, bank);
      const firstPosition = hash(`review-${dayIndex}-${lag}`) % source.length;
      for (let index = 0; index < source.length; index += 1) {
        const candidate = source[(firstPosition + index) % source.length];
        if (!used.has(candidate.word)) {
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
