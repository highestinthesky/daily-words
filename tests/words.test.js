import { expect, it } from 'vitest';
import { WORDS } from '../src/words.js';

// Words named for people, places, myths, or events read as trivia, not vocabulary.
const namesake = `
freudian pyrrhic kafkaesque orwellian machiavellian herculean platonic byzantine dickensian
homeric faustian spartan pavlovian sisyphean quixotic draconian mesmerize galvanize mercurial
jovial saturnine protean stentorian tantalize bowdlerize chauvinist maverick panglossian
procrustean nemesis halcyon laconic sardonic stoic serendipity serendipitous martinet lothario
philistine pander hector solecism sybaritic meander epicurean malapropism odyssey titanic
hermetic stygian narcissistic boycott gerrymander utopian arcadian mentor bedlam
`.trim().split(/\s+/);

// Words most strong students already use; the bank should teach something new.
const tooCommon = `
astute candid pragmatic eloquent succinct meticulous shrewd perceptive vivid vibrant affable
gregarious empathetic resolute tenacious intrepid audacious ingenious resourceful adaptable
versatile discreet idyllic opulent prolific momentous formidable arduous esteemed revered
benevolent compliant reciprocal ambiguity paradox catalyst ethos dilemma insight curiosity
facilitate cultivate bolster mitigate alleviate reconcile synthesize contemplate scrutinize
expedite poignant resonant evocative ubiquitous pervasive sporadic grandiose pedantic myopic
anomaly outlier caveat milieu ambience allure lexicon vernacular epitome paradigm impetus
cerebral incendiary rambunctious frenetic egregious nefarious banal innocuous gratuitous macabre
fraught indelible sumptuous verdant nebulous amorphous contingent copious ostentatious
precocious nepotism allegory dichotomy conundrum impasse hiatus vignette zeitgeist hubris
watershed quandary plethora zenith harbinger microcosm finesse fortitude touchstone portent
`.trim().split(/\s+/);

it('ships a large, varied word bank', () => {
  expect(WORDS.length).toBeGreaterThanOrEqual(500);
  expect(new Set(WORDS.map(({ word }) => word)).size).toBe(WORDS.length);
  expect(WORDS.filter(({ part }) => part === 'adj.').length).toBeGreaterThanOrEqual(200);
  expect(WORDS.filter(({ part }) => part === 'noun').length).toBeGreaterThanOrEqual(120);
  expect(WORDS.filter(({ part }) => part === 'verb').length).toBeGreaterThanOrEqual(120);
});

it('keeps namesakes and familiar words out of the bank', () => {
  const words = new Set(WORDS.map(({ word }) => word));
  expect(namesake.filter((word) => words.has(word))).toEqual([]);
  expect(tooCommon.filter((word) => words.has(word))).toEqual([]);
});

it('writes every entry in a consistent, layout-safe form', () => {
  for (const { word, part, meaning, example } of WORDS) {
    expect(word, word).toMatch(/^[a-z]{4,14}$/);
    expect(['adj.', 'noun', 'verb'], word).toContain(part);
    expect(meaning, word).toMatch(/^[A-Z].{15,72}\.$/);
    expect(example, word).toMatch(/^[A-Z‘][^"]{20,80}[.!?]’?$/);
    expect(meaning.toLowerCase(), word).not.toContain(word.slice(0, Math.max(5, word.length - 3)));
  }
});

it('uses each word in its own example sentence', () => {
  for (const { word, example } of WORDS) {
    const stem = word.slice(0, Math.max(4, word.length - 2));
    expect(example.toLowerCase(), word).toContain(stem);
  }
});
