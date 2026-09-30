import assert from 'node:assert/strict';
import { chromium, webkit } from 'playwright';
import { createServer } from 'vite';

const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
await server.listen();
const origin = `http://127.0.0.1:${server.httpServer.address().port}`;

async function assertReadable(page) {
  // Check offscreen entries too: Safari used to leave the last three at opacity 0.
  await page.waitForFunction(() => {
    const entries = document.querySelectorAll('article');
    return entries.length === 5 && [...document.querySelectorAll('#edition *')]
      .every((element) => getComputedStyle(element).opacity === '1');
  }, undefined, { timeout: 4000 });

  const issues = await page.evaluate(() => {
    const issues = [];
    if (document.documentElement.scrollWidth > innerWidth) issues.push('horizontal overflow');
    for (const article of document.querySelectorAll('article')) {
      const heading = article.querySelector('h1, h2');
      const range = document.createRange();
      range.selectNodeContents(heading);
      const marker = article.querySelector('.word-card__review-mark')?.getBoundingClientRect();
      for (const rect of range.getClientRects()) {
        if (rect.left < 0 || rect.right > innerWidth + 1) issues.push(`${heading.textContent}: clipped`);
        if (marker && rect.left < marker.right && rect.right > marker.left
          && rect.top < marker.bottom && rect.bottom > marker.top) {
          issues.push(`${heading.textContent}: review marker overlap`);
        }
      }
      const part = article.querySelector('.lead-word__part, .word-card__part');
      if (heading.getBoundingClientRect().bottom > part.getBoundingClientRect().top + 1) {
        issues.push(`${heading.textContent}: part of speech overlap`);
      }
    }
    return issues;
  });
  assert.deepEqual(issues, []);
}

try {
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    const browser = await engine.launch();
    try {
      for (const width of [320, 375, 414, 768, 1280]) {
        for (const reducedMotion of ['no-preference', 'reduce']) {
          const page = await browser.newPage({ viewport: { width, height: 812 }, reducedMotion });
          try {
            await page.clock.install({ time: new Date('2026-09-30T16:00:00Z') });
            await page.clock.resume();
            await page.goto(origin);
            await page.evaluate(() => document.fonts.ready);
            await assertReadable(page);
            await page.locator('.word-card').last().scrollIntoViewIfNeeded();
            await assertReadable(page);

            // Accessibility text enlargement forces today's review heading to wrap.
            if (width === 320) {
              for (const fontSize of ['24px', '32px']) {
                await page.evaluate((size) => { document.documentElement.style.fontSize = size; }, fontSize);
                await assertReadable(page);
              }
              await page.evaluate(() => { document.documentElement.style.fontSize = ''; });
            }

            // An open tab must remain readable when tomorrow's edition animates in.
            const previousWords = await page.locator('h1, h2').allTextContents();
            await page.clock.setFixedTime(new Date('2026-10-01T16:00:00Z'));
            await page.evaluate(() => window.dispatchEvent(new Event('focus')));
            assert.notDeepEqual(await page.locator('h1, h2').allTextContents(), previousWords);
            await assertReadable(page);
            console.log(`PASS ${name}: ${width}px, ${reducedMotion}`);
          } finally {
            await page.close();
          }
        }
      }
    } finally {
      await browser.close();
    }
  }
} finally {
  await server.close();
}
