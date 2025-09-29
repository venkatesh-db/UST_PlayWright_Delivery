


import { test, expect } from '@playwright/test';

test.describe('Flipkart – Tables & Multi-tabs', () => {
  test('Validate orders table & compare products', async ({ browser }) => {
    
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Orders page
    await page.goto('https://www.flipkart.com/account/orders');

    // Table traversal
    const rows = page.locator('table tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {
      const product = await rows.nth(i).locator('td:nth-child(2)').innerText();
      const price = await rows.nth(i).locator('td:nth-child(3)').innerText();
      if (parseInt(price.replace(/[^0-9]/g, '')) > 50000) {
        console.log('High-value order:', product, price);
      }
    }

    // Multi-tab: Compare products
    const page1 = await context.newPage();
    await page1.goto('https://www.flipkart.com/product/p/itm123');

    const page2 = await context.newPage();
    await page2.goto('https://www.flipkart.com/product/p/itm456');

    const product1 = await page1.locator('span.B_NuCI').innerText();
    const product2 = await page2.locator('span.B_NuCI').innerText();

    console.log('Compare Products:', product1, 'vs', product2);
  });
});
