import { chromium } from 'playwright';
const URL_ = process.env.BASE_URL ?? 'http://localhost:4321/peanut-test/';
const out = new URL('../screenshots/', import.meta.url).pathname;
const shots = [
  { file: 'mobile.png', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { file: 'desktop.png', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
];
const browser = await chromium.launch();
for (const { file, ...o } of shots) {
  const ctx = await browser.newContext(o);
  const page = await ctx.newPage();
  const bad = [];
  page.on('response', (r) => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url()}`); });
  await page.goto(URL_, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { await document.fonts.ready; for (let y = 0; y < document.body.scrollHeight; y += 300) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } scrollTo(0, 0); });
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')));
  await page.waitForTimeout(2500);
  await page.addStyleTag({ content: '[data-call-bar]{position:relative!important;display:block!important;width:100%!important}' });
  await page.screenshot({ path: out + file, fullPage: true });
  console.log('✓', file, bad.length ? 'BAD: ' + bad.join(', ') : 'no failed requests');
  await ctx.close();
}
await browser.close();
