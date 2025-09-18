
import { test, expect } from '@playwright/test';

test('Locator Identification Demo', async ({ page }) => {
  // Load local HTML file (adjust path if needed)
  
  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project1/index.html');

  
  // --- getByText (for non-interactive text) ---
  await expect(page.getByText('Click the button below to continue')).toBeVisible();

  // --- getByRole (for buttons/links) ---
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();

  // --- getByLabel ---
  await page.getByLabel('Username:').fill('test_user');
  await page.getByLabel('Password:').fill('secret123');

  // --- locator() ---
  const productLocator = page.locator('.product');
  await expect(productLocator).toHaveCount(3);
  await expect(productLocator.nth(0)).toHaveText('Laptop');

  // --- page.locator() with CSS ---
  const mobile = page.locator('.product[data-id="102"]');
  await expect(mobile).toHaveText('Mobile');

  // --- CSS Selector directly ---
  await expect(page.locator('div.product-list > div.product:last-child')).toHaveText('Headphones');

  
});
