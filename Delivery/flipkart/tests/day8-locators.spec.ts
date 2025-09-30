
import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('Flipkart Ecommerce – Stable & Debug Friendly', () => {
  test('Search product, add to cart, compare titles', async ({ page, context }) => {

    // 1. Go to Flipkart
    await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });

    // 2. Close login popup if present
    const closeBtn = page.locator('button:has-text("✕")');
    if (await closeBtn.count() > 0) {
      await closeBtn.click();
    }

    // 3. Search for product
    const searchBox = page.locator('input[name="q"]');
    await expect(searchBox).toBeVisible({ timeout: 10000 });
    await searchBox.fill('iPhone 15');
    await searchBox.press('Enter');

    // 4. Wait for search results - multiple fallbacks
    let firstProduct = page.locator('a:has-text("iPhone 15")').first();

    if (await firstProduct.count() === 0) {
      firstProduct = page.locator('div._2kHMtA a').first(); // mobiles
    }
    if (await firstProduct.count() === 0) {
      firstProduct = page.locator('a.s1Q9rs').first(); // general items
    }
    if (await firstProduct.count() === 0) {
      firstProduct = page.locator('a[href*="/apple-iphone"], a[href*="/product/"]').first();
    }

    // Debug fallback if still nothing
    if (await firstProduct.count() === 0) {
      const body = await page.locator('body').innerHTML();
      fs.writeFileSync('debug_flipkart.html', body);
      await page.screenshot({ path: 'debug_flipkart.png', fullPage: true });
      throw new Error("❌ No product results found. Saved debug_flipkart.html + debug_flipkart.png");
    }

    await firstProduct.waitFor({ state: 'visible', timeout: 20000 });
    await expect(firstProduct).toBeVisible();

    // 5. Open product page
    const [productPage] = await Promise.all([
      context.waitForEvent('page').catch(() => null),
      firstProduct.click({ button: 'middle' }).catch(() => firstProduct.click())
    ]);
    const prodPage = productPage ?? page;
    await prodPage.waitForLoadState('domcontentloaded');

    // 6. Get product title
    const productTitle = prodPage.locator('span.B_NuCI, h1, div._35KyD6').first();
    await productTitle.waitFor({ state: 'visible', timeout: 20000 });
    const productTitleText = await productTitle.innerText();

    // 7. Add to Cart (robust selector)
    const addToCartBtn = prodPage.locator(
      'button:has-text("ADD TO CART"), button:has-text("Add to cart"), button:has-text("Buy Now"), div:has-text("ADD TO CART")'
    ).first();

    if (await addToCartBtn.count() === 0) {
      await prodPage.screenshot({ path: 'debug_no_add_to_cart.png', fullPage: true });
      throw new Error("❌ No Add to Cart button found. Screenshot saved as debug_no_add_to_cart.png");
    }

    await addToCartBtn.waitFor({ state: 'visible', timeout: 20000 });
    await addToCartBtn.click();

    // 8. Verify Cart
    const cartIndicator = prodPage.locator('a:has-text("Cart"), span:has-text("My Cart")').first();
    await expect(cartIndicator).toBeVisible({ timeout: 20000 });

    console.log('✅ Product added to cart:', productTitleText);
  });
});
