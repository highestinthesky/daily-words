import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/dm-sans/wght.css';
import { animate, stagger } from 'animejs';
import { getDailyEdition, getEditorialDate } from './daily.js';
import { WORDS } from './words.js';
import './style.css';

const editionRoot = document.querySelector('#edition');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentDateKey = '';

function make(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeExample(sentence) {
  const paragraph = make('p', 'example');
  paragraph.textContent = `“${sentence}”`;
  return paragraph;
}

function makeLead(entry) {
  const article = make('article', 'lead-word');
  const left = make('div', 'lead-word__left');
  const term = make('h1', `lead-word__term${entry.word.length > 11 ? ' lead-word__term--long' : ''}`, entry.word);
  left.append(term, make('p', 'lead-word__part', entry.part));

  const right = make('div', 'lead-word__right');
  right.append(make('p', 'lead-word__meaning', entry.meaning), makeExample(entry.example));
  article.append(left, right);
  return article;
}

function makeCard(entry) {
  const article = make('article', `word-card${entry.isReview ? ' word-card--review' : ''}`);
  if (entry.isReview) {
    article.setAttribute('aria-label', `Review word: ${entry.word}`);
    const mark = make('span', 'word-card__review-mark', '↺');
    mark.setAttribute('aria-hidden', 'true');
    article.append(mark);
  }
  article.append(
    make('h2', `word-card__term${entry.word.length > 11 ? ' word-card__term--long' : ''}`, entry.word),
    make('p', 'word-card__part', entry.part),
    make('p', 'word-card__meaning', entry.meaning),
    makeExample(entry.example),
  );
  return article;
}

function renderEdition(dateKey) {
  const { words } = getDailyEdition(dateKey, WORDS);
  const grid = make('section', 'word-grid');
  grid.setAttribute('aria-label', 'More words');
  words.slice(1).forEach((entry) => grid.append(makeCard(entry)));

  editionRoot.replaceChildren(makeLead(words[0]), grid);
  currentDateKey = dateKey;

  if (!reducedMotion.matches) {
    const targets = [
      document.querySelector('.masthead__brand'),
      ...editionRoot.querySelectorAll('.lead-word__left, .lead-word__right, .word-card'),
    ];
    animate(targets, {
      opacity: [0, 1],
      y: [14, 0],
      delay: stagger(65),
      duration: 620,
      ease: 'outExpo',
    });
  }
}

function updateIfNeeded() {
  const dateKey = getEditorialDate();
  if (dateKey !== currentDateKey) renderEdition(dateKey);
}

function scheduleNextCheck() {
  const delay = 60_000 - (Date.now() % 60_000) + 50;
  window.setTimeout(() => {
    updateIfNeeded();
    scheduleNextCheck();
  }, delay);
}

updateIfNeeded();
scheduleNextCheck();
window.addEventListener('focus', updateIfNeeded);
window.addEventListener('pageshow', updateIfNeeded);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) updateIfNeeded();
});
