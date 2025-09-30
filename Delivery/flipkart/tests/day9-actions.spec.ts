
import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('Flipkart – Full Checkout Flow (Session Login)', () => {

  test('Search product, add to cart, fill shipping/payment', async ({ browser }) => {

    const sessionFile = 'flipkart-session.json';
    if (!fs.existsSync(sessionFile)) {
      throw new Error('❌ No saved session found. Run the manual login script first.');
    }

    const context = await browser.newContext({ storageState: sessionFile });
    const page = await context.newPage();

    // 1. Go to Flipkart homepage
    await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

    // 2. Close login popup if present
    const closeBtn = page.locator('button:has-text("✕")');
    if (await closeBtn.count() > 0) await closeBtn.click();

    // 3. Search for product
    const searchBox = page.locator('input[name="q"]');
    await searchBox.waitFor({ state: 'visible', timeout: 15000 });
    await searchBox.fill('iPhone 15');
    await searchBox.press('Enter');

    // 4. Wait for first product
    let firstProduct = page.locator('a:has-text("iPhone 15")').first();
    if ((await firstProduct.count()) === 0) {
      firstProduct = page.locator('div._2kHMtA a, a.s1Q9rs').first();
    }
    if ((await firstProduct.count()) === 0) {
      await page.screenshot({ path: 'debug_search.png', fullPage: true });
      throw new Error('❌ No product found. Screenshot saved as debug_search.png');
    }
    await firstProduct.waitFor({ state: 'visible', timeout: 20000 });
    await firstProduct.click();

    // 5. Add to cart
    const addToCartBtn = page.locator('button:has-text("ADD TO CART"), button:has-text("Buy Now")')
      .filter({ has: page.locator(':visible') })
      .first();
    await addToCartBtn.waitFor({ state: 'visible', timeout: 20000 }).catch(async () => {
      await page.screenshot({ path: 'debug_addtocart.png', fullPage: true });
      throw new Error('❌ Add to Cart button not found. Screenshot saved as debug_addtocart.png');
    });
    await addToCartBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // 6. Go to cart
    await page.goto('https://www.flipkart.com/viewcart');
    const cartContainer = page.locator('div._1YokD2 div._1AtVbE, div._2-uG6-').first();
    await cartContainer.waitFor({ state: 'visible', timeout: 20000 }).catch(async () => {
      await page.screenshot({ path: 'debug_cart.png', fullPage: true });
      throw new Error('❌ Cart did not load. Screenshot saved as debug_cart.png');
    });

    // 7. Fill shipping pincode
    const pincodeInput = page.locator('input[placeholder*="Enter Delivery Pincode"]');
    if (await pincodeInput.count() > 0) {
      await pincodeInput.fill('560001');
      await pincodeInput.press('Enter');
      await page.waitForTimeout(2000);
    }

    // 8. Gift wrap checkbox
    const giftWrapCheckbox = page.locator('label:has-text("Gift Wrap") input[type="checkbox"]');
    if (await giftWrapCheckbox.count() > 0 && !(await giftWrapCheckbox.isChecked())) {
      await giftWrapCheckbox.check();
    }

    // 9. Payment option
    const paymentOption = page.locator('label:has-text("Credit / Debit Card") input[type="radio"]');
    if (await paymentOption.count() > 0) {
      await paymentOption.check();
    }

    // 10. Capture order total
    const orderTotal = page.locator('span._1XXdHc, div._1V3w');
    if (await orderTotal.count() > 0) {
      console.log('Order Total:', await orderTotal.first().innerText());
    }

    console.log('✅ Full Flipkart checkout flow completed successfully.');
  });
});
