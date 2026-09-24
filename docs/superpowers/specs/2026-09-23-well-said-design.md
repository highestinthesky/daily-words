# Well Said — design specification

## Purpose

Give a small group of friends five sophisticated, usable words each day. A visit should be enough to read the words, understand them, and see how they fit in ordinary conversation. There are no accounts, streaks, check-ins, or prompts to report use.

## Visual direction

The site is a bare page of five entries under a minimal “well said.” masthead. The first new word is typeset large; four more words sit below in a compact ruled list. Every entry shows only the term, part of speech, short meaning, and a natural example sentence. All five meanings use the same font, size, and line height; all five examples do too. A returning word gets a small visual mark, with no visible explanation. There is no visible date, tagline, navigation, introductory copy, section heading, ordinal label, or footer. The palette is tinted paper, deep ink, and a restrained ink-blue accent. Display type is Fraunces; reading type is DM Sans. There is no photography or decorative illustration.

Hallmark: editorial genre, Marquee Hero macrostructure, Newsprint theme, minimal masthead, typography-only enrichment. The user's explicit request for no footer supersedes Hallmark's usual footer pick. Motion is a single load sequence: masthead and word entries arrive with short opacity and transform changes via Anime.js. Reduced-motion users see the content immediately.

## Daily content

- A local bank contains 324 active, distinct words with concise meanings and examples. Common or unserious candidates are excluded from selection. It includes allusions such as “quixotic” and “Sisyphean” where they are useful in ordinary speech. The opening edition is curated to establish the more sophisticated tone.
- The canonical date is the calendar date in `America/New_York`. The set changes at midnight in that timezone, including daylight-saving transitions. An already-open page checks the date periodically and updates without a reload.
- For the first seven days from the editorial epoch, show five new words. Thereafter show four new words plus one deterministic review word selected from the previous two to six days.
- Selection is deterministic from the canonical date and bundled bank. It stores no per-user data and makes no content API request. The same date produces the same selection for every visitor with a correct clock.
- New words run through a seeded permutation before they repeat. A new permutation begins when the bank is exhausted.

## Technical design

Vite builds a small, static JavaScript site for GitHub Pages. Relative asset paths support a repository site under a path prefix. `src/daily.js` owns date conversion and selection and exposes pure functions for tests. `src/words.js` owns the curated content. `src/main.js` renders semantic HTML and schedules date checks. `src/style.css` consumes portable variables in root `tokens.css`. Anime.js runs only after content is rendered. The page has a text-only no-script fallback message.

GitHub Actions runs tests, builds, and uploads `dist/` to Pages on pushes to `main`. The daily change happens in the visitor's browser, so it does not require a daily build or workflow schedule.

## Review and verification

Pure tests cover timezone boundaries, daylight-saving dates, determinism, five distinct entries, review provenance, and no repeat of new words within a bank cycle. The production build must pass. Visual review covers desktop and 320, 375, 414, and 768 px widths; content must not scroll horizontally, and reduced-motion rendering must remain readable.

## Deployment limit

The local folder has no Git repository or remote yet. The project will include a ready-to-run Pages workflow and setup steps. Publishing requires a GitHub repository connected to this folder and Pages set to GitHub Actions.
