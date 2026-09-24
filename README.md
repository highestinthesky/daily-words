# Well Said

Five useful words for each New York day, with a short meaning and example for each. The site is static and needs no account, server, dictionary API, or nightly job.

## Run locally

```sh
npm ci
npm run dev
```

`npm test` checks the date and review rules plus the 324-entry active word bank. `npm run build` creates the deployable `dist/` folder.

## Daily selection

The browser calculates the current calendar date in `America/New_York`, then selects the same five entries from the bundled bank for every visitor. It checks at each minute boundary and when the tab becomes active, so an open page changes at New York midnight. For the first seven days from September 23, 2026, all five words are new. Starting September 30, one entry per day revisits a new word from two to six days earlier. The first word is always new. New entries cycle through the full bank before repeating.

The date follows the visitor's device clock. A device set to the wrong time can show the wrong edition until its clock is corrected.

## Publish on GitHub Pages

1. Create a GitHub repository and connect this folder as its `main` branch. Commit and push the project, including `package-lock.json` and `.github/workflows/pages.yml`.
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. The **Deploy to GitHub Pages** workflow tests, builds, and publishes the site whenever `main` is pushed. The published URL appears in the deployment job and Pages settings.

The Vite build uses relative paths, so it works at both a user site and a repository site URL. Daily word changes happen in the browser; no scheduled GitHub Action is required.

To edit the bank, update the pipe-separated rows in `src/words.js`. Each row contains the word, part of speech, meaning, and example. The active selection also excludes the simpler terms listed near the end of that file. Run `npm test` before pushing.
