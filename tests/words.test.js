import { expect, it } from 'vitest';
import { WORDS } from '../src/words.js';

it('ships a varied, complete local word bank', () => {
  expect(WORDS.length).toBeGreaterThanOrEqual(300);
  expect(new Set(WORDS.map(({ word }) => word.toLowerCase())).size).toBe(WORDS.length);
  expect(WORDS.filter(({ part }) => part === 'noun').length).toBeGreaterThanOrEqual(60);
  expect(WORDS.filter(({ part }) => part === 'verb').length).toBeGreaterThanOrEqual(60);
  expect(WORDS.some(({ word }) => word === 'accomplished' || word === 'plucky')).toBe(false);
  for (const entry of WORDS) {
    expect(entry.word.length).toBeGreaterThan(2);
    expect(entry.part.length).toBeGreaterThan(3);
    expect(entry.meaning.length).toBeGreaterThan(10);
    expect(entry.example.length).toBeGreaterThan(20);
  }
});
