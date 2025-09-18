

import { test, expect } from '@playwright/test';

test('Locator Identification Demo — debug friendly', async ({ page }) => {

  // 1) Print page console messages to terminal
  page.on('console', msg => console.log(`[PAGE ${msg.type()}] ${msg.text()}`));

  // 2) Load the local HTML
  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project1/index.html');

  // 3) Pause here to inspect interactively (Inspector opens when running with --debug or PWDEBUG)
  await page.pause();

  // 4) Example assertions / interactions
  await expect(page.getByText('Click the button below to continue')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();

  await page.getByLabel('Username:').fill('test_user');
  await page.getByLabel('Password:').fill('secret123');

  const productLocator = page.locator('.product');
  await expect(productLocator).toHaveCount(3);
  await expect(productLocator.nth(0)).toHaveText('Laptop');
  await expect(page.locator('.product[data-id="102"]')).toHaveText('Mobile');
  await expect(page.locator('div.product-list > div.product:last-child')).toHaveText('Headphones');

  // 5) Save a screenshot and a small local log file for later inspection

  await page.screenshot({ path: 'debug/final-state.png' });
  console.log('Saved debug/final-state.png');
});
