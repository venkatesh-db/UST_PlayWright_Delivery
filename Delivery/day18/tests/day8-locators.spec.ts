
import { test, expect } from '@playwright/test';

test.describe('Flipkart Ecommerce – Locators', () => {

  test('Search product and add to cart', async ({ page }) => {

    await page.goto('https://www.flipkart.com');

    // Close login popup
    await page.locator('button:has-text("✕")').click();

    // Search for product
    const searchBox = page.getByRole('combobox', { name: 'Search for products, brands and more' });
    await searchBox.fill('iPhone 15');
    await searchBox.press('Enter');

    // Wait for results
    const firstProduct = page.getByText('Apple iPhone 15');
    await expect(firstProduct).toBeVisible();

    // Click first product
    await firstProduct.click();

    // Add to cart (new tab opens)
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.locator('text=Add to Cart').click()
    ]);

    await newPage.waitForLoadState();
    
    const addToCartBtn = newPage.getByRole('button', { name: 'ADD TO CART' });
    await expect(addToCartBtn).toBeVisible();
  });
});

