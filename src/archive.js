import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/dm-sans/wght.css';
import { getEditorialDate, getWordHistory } from './daily.js';
import { BANKS } from './words.js';
import './style.css';

const list = document.querySelector('#archive-list');
const summary = document.querySelector('#archive-summary');

function make(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function formatDate(dateKey, today) {
  const date = new Date(`${dateKey}T12:00:00Z`);
  const options = { month: 'short', day: 'numeric', timeZone: 'UTC' };
  if (dateKey.slice(0, 4) !== today.slice(0, 4)) options.year = 'numeric';
  return date.toLocaleDateString('en-US', options);
}

function makeDate({ date, isReview }, today) {
  const item = make('li', `archive-entry__date${date === today ? ' archive-entry__date--today' : ''}`);
  const time = make('time', '', date === today ? 'Today' : formatDate(date, today));
  time.dateTime = date;
  item.append(time);
  if (isReview) {
    const mark = make('span', 'archive-entry__review', ' ↺');
    mark.setAttribute('aria-hidden', 'true');
    item.append(mark, make('span', 'visually-hidden', ' (review)'));
  }
  return item;
}

function makeEntry(entry, today) {
  const item = make('li', 'archive-entry');
  const name = make('div', 'archive-entry__name');
  name.append(
    make('h2', 'archive-entry__term', entry.word),
    make('p', 'archive-entry__part', entry.part),
  );

  const body = make('div', 'archive-entry__body');
  body.append(
    make('p', 'archive-entry__meaning', entry.meaning),
    make('p', 'example archive-entry__example', `“${entry.example}”`),
  );

  const dates = make('ul', 'archive-entry__dates');
  dates.setAttribute('aria-label', `Days ${entry.word} appeared`);
  // Newest first, so the most recent sighting sits at the top of each row.
  [...entry.appearances].reverse().forEach((appearance) => dates.append(makeDate(appearance, today)));

  item.append(name, body, dates);
  return item;
}

const today = getEditorialDate();
const history = getWordHistory(today, BANKS);
const editions = new Set(history.flatMap(({ appearances }) => appearances.map(({ date }) => date))).size;

summary.textContent = `${history.length} words across ${editions} ${editions === 1 ? 'day' : 'days'}, A to Z. Dates run newest first; ↺ marks a day the word came back for review.`;
list.replaceChildren(...history.map((entry) => makeEntry(entry, today)));
