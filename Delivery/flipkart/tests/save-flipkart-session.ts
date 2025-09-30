
import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false }); // open real browser
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.flipkart.com');

  console.log('🔹 Please log in manually in the browser. Press ENTER in the terminal when done...');
  
  process.stdin.once('data', async () => {
    // Save session after manual login
    await context.storageState({ path: 'flipkart-session.json' });
    console.log('✅ Session saved to flipkart-session.json');
    await browser.close();
    process.exit(0);
  });
})();
