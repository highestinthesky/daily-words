import { describe, expect, it } from 'vitest';
import { getDailyEdition, getEditorialDate, getNewWords } from '../src/daily.js';
import { WORDS } from '../src/words.js';

const bank = Array.from({ length: 101 }, (_, index) => ({
  word: `word-${index}`,
  part: 'noun',
  meaning: `Meaning ${index}`,
  example: `An example for word-${index}.`,
}));

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

  it('keeps real editions distinct and review words traceable across the first bank cycle', () => {
    const start = Date.parse('2026-09-23T00:00:00Z');
    const newlySeen = new Set();
    const cycleDays = 7 + Math.ceil((WORDS.length - 35) / 4);
    for (let day = 0; day < cycleDays; day += 1) {
      const dateKey = new Date(start + day * 86_400_000).toISOString().slice(0, 10);
      const edition = getDailyEdition(dateKey, WORDS);
      expect(new Set(edition.words.map(({ word }) => word)).size).toBe(5);
      for (const entry of edition.words) {
        if (entry.isReview) {
          const source = getDailyEdition(entry.reviewedFrom, WORDS);
          expect(source.words.some((candidate) => !candidate.isReview && candidate.word === entry.word)).toBe(true);
        } else if (newlySeen.size < WORDS.length) {
          expect(newlySeen.has(entry.word)).toBe(false);
          newlySeen.add(entry.word);
        }
      }
    }
    expect(newlySeen.size).toBe(WORDS.length);
  });
});
