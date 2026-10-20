# Well Said

Five uncommon words for each New York day, with a short meaning and example for each. The site is static and needs no account, server, dictionary API, or nightly job.

## Run locally

```sh
npm ci
npm run dev
```

`npm test` checks the date and review rules, the switch between word banks, the archive history, and the 1,034-entry word bank. `npm run build` creates the deployable `dist/` folder.

For browser regression checks, run `npx playwright install chromium webkit` once, then `npm run test:mobile`. These check that all five entries stay visible after the entrance animation and scrolling in Chromium and Safari's WebKit engine, at phone, tablet, and desktop widths. They also cover reduced motion, enlarged text, review-marker overlap, a daily edition change, and the archive page layout.

## Archive

`archive.html` lists every word shown so far, A to Z, with the dates it appeared on the side. Review days are marked with ↺. The page rebuilds the list in the browser from the same daily selection, so it needs no stored history.

## Daily selection

The browser calculates the current calendar date in `America/New_York`, then selects the same five entries from the bundled bank for every visitor. It checks at each minute boundary and when the tab becomes active, so an open page changes at New York midnight. For the first seven days from September 23, 2026, all five words are new. Starting September 30, one entry per day revisits a new word from two to six days earlier. The first word is always new. New entries cycle through the full bank before repeating.

The date follows the visitor's device clock. A device set to the wrong time can show the wrong edition until its clock is corrected.

On each load, Anime.js reveals the lead word and then the supporting entries with a short, staggered motion. The site uses its small Web Animations module and shows everything immediately when reduced motion is preferred.

## Publish on GitHub Pages

1. Create a GitHub repository and connect this folder as its `main` branch. Commit and push the project, including `package-lock.json` and `.github/workflows/pages.yml`.
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. The **Deploy to GitHub Pages** workflow tests, builds, and publishes the site whenever `main` is pushed. The published URL appears in the deployment job and Pages settings.

The Vite build uses relative paths, so it works at both a user site and a repository site URL. Daily word changes happen in the browser; no scheduled GitHub Action is required.

To edit the bank, update the pipe-separated rows in `src/words.js`. Each row contains the word, part of speech, meaning, and example. The bank stays above everyday vocabulary and leaves out words named for people, places, or events, such as *Freudian* or *quixotic*; `tests/words.test.js` blocks known namesakes and familiar words. Run `npm test` before pushing.

Past editions are recalculated from the bank, so the bank in use on a past date must never change. `src/words.js` keeps the launch bank (`firstRows`) frozen, and a test fails if its words or order change. From October 22, 2026, the site draws from a second bank: the launch bank minus the `retired` words, plus `addedRows`. To retire or add words later, add a new dated entry to `BANKS` that starts on a future date instead of editing a bank already in use.
