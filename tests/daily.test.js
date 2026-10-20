import { describe, expect, it } from 'vitest';
import { getDailyEdition, getEditorialDate, getNewWords, getWordHistory } from '../src/daily.js';
import { BANKS, FIRST_BANK, WORDS } from '../src/words.js';

const bank = Array.from({ length: 101 }, (_, index) => ({
  word: `word-${index}`,
  part: 'noun',
  meaning: `Meaning ${index}`,
  example: `An example for word-${index}.`,
}));

function dateAfterLaunch(day) {
  return new Date(Date.parse('2026-09-23T00:00:00Z') + day * 86_400_000).toISOString().slice(0, 10);
}

describe('New York editorial date', () => {
  it('changes at New York midnight rather than the visitor’s midnight', () => {
    expect(getEditorialDate(new Date('2026-03-08T04:59:59Z'))).toBe('2026-03-07');
    expect(getEditorialDate(new Date('2026-03-08T05:00:00Z'))).toBe('2026-03-08');
  });

  it('keeps one date through the repeated hour when daylight saving ends', () => {
    expect(getEditorialDate(new Date('2026-11-01T03:59:59Z'))).toBe('2026-10-31');
    expect(getEditorialDate(new Date('2026-11-01T04:00:00Z'))).toBe('2026-11-01');
    expect(getEditorialDate(new Date('2026-11-01T06:00:00Z'))).toBe('2026-11-01');
  });
});

describe('daily word selection', () => {
  it('shows five new words for the first seven editions', () => {
    for (let day = 0; day < 7; day += 1) {
      const edition = getDailyEdition(`2026-09-${String(23 + day).padStart(2, '0')}`, bank);
      expect(edition.words).toHaveLength(5);
      expect(edition.words.every((entry) => !entry.isReview)).toBe(true);
    }
  });

  it('shows four new words and one word first seen two to six days ago after a week', () => {
    const edition = getDailyEdition('2026-09-30', bank);
    const review = edition.words.filter((entry) => entry.isReview);
    expect(review).toHaveLength(1);
    expect(edition.words.filter((entry) => !entry.isReview)).toHaveLength(4);
    expect(review[0].reviewedFrom).toMatch(/^2026-09-2[4-8]$/);
    const source = getDailyEdition(review[0].reviewedFrom, bank);
    expect(source.words.some((entry) => entry.word === review[0].word && !entry.isReview)).toBe(true);
  });

  it('produces the same five distinct words for repeat visits on the same date', () => {
    const first = getDailyEdition('2026-10-15', bank);
    const second = getDailyEdition('2026-10-15', bank);
    expect(first).toEqual(second);
    expect(new Set(first.words.map((entry) => entry.word)).size).toBe(5);
  });

  it('uses every word as new before a new cycle can repeat it', () => {
    const seen = new Set();
    for (let day = 0; day < 24; day += 1) {
      for (const entry of getNewWords(day, bank)) {
        if (seen.size < bank.length) expect(seen.has(entry.word)).toBe(false);
        seen.add(entry.word);
      }
    }
    expect(seen.size).toBe(bank.length);
  });
});

describe('switching word banks', () => {
  const switchDay = Math.round((Date.parse(`${BANKS[1].from}T00:00:00Z`) - Date.parse('2026-09-23T00:00:00Z')) / 86_400_000);

  it('leaves every edition before the switch exactly as it was', () => {
    for (let day = 0; day < switchDay; day += 1) {
      const date = dateAfterLaunch(day);
      expect(getDailyEdition(date, BANKS), date).toEqual(getDailyEdition(date, FIRST_BANK));
    }
  });

  it('draws only current words as new once the switch happens', () => {
    const current = new Set(WORDS.map(({ word }) => word));
    for (let day = switchDay; day < switchDay + 60; day += 1) {
      for (const entry of getDailyEdition(dateAfterLaunch(day), BANKS).words) {
        expect(current.has(entry.word), entry.word).toBe(true);
      }
    }
  });

  it('keeps real editions distinct and review words traceable until every current word has been new', () => {
    const current = new Set(WORDS.map(({ word }) => word));
    const newlySeen = new Set();
    let currentSeen = 0;
    const coversCurrent = () => currentSeen === current.size;
    let day = 0;
    for (; !coversCurrent(); day += 1) {
      expect(day, 'days to cover the current bank').toBeLessThan(400);
      const dateKey = dateAfterLaunch(day);
      const edition = getDailyEdition(dateKey, BANKS);
      expect(new Set(edition.words.map(({ word }) => word)).size).toBe(5);
      for (const entry of edition.words) {
        if (entry.isReview) {
          const source = getDailyEdition(entry.reviewedFrom, BANKS);
          expect(source.words.some((candidate) => !candidate.isReview && candidate.word === entry.word)).toBe(true);
        } else if (!coversCurrent()) {
          expect(newlySeen.has(entry.word), `${entry.word} repeated on ${dateKey}`).toBe(false);
          newlySeen.add(entry.word);
          if (current.has(entry.word)) currentSeen += 1;
        }
      }
    }
    expect(day).toBeGreaterThan(switchDay);
  });
});

describe('word history', () => {
  it('lists each shown word once, alphabetized, with every day it appeared', () => {
    const history = getWordHistory('2026-10-10', bank);
    const words = history.map(({ word }) => word);
    expect(words).toEqual([...words].sort((a, b) => a.localeCompare(b)));
    expect(new Set(words).size).toBe(words.length);

    const appearances = history.flatMap(({ word, appearances }) => appearances.map(({ date, isReview }) => ({ word, date, isReview })));
    for (let day = 0; day <= 17; day += 1) {
      const date = dateAfterLaunch(day);
      for (const entry of getDailyEdition(date, bank).words) {
        expect(appearances).toContainEqual({ word: entry.word, date, isReview: entry.isReview });
      }
    }
    expect(appearances).toHaveLength(7 * 5 + 11 * 5);
  });

  it('keeps entry details without per-day review fields', () => {
    const [entry] = getWordHistory('2026-10-10', bank);
    expect(Object.keys(entry).sort()).toEqual(['appearances', 'example', 'meaning', 'part', 'word']);
  });
});
