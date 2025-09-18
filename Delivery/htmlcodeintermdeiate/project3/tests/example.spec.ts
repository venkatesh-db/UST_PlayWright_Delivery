

import { test, expect } from '@playwright/test';

test('Playwright Demo: Inputs & Text', async ({ page }) => {
  // Load local HTML
  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project3/index.html');

  // --- Typing ---
  const username = page.locator('#username');
  await username.fill('coder123');
  await expect(username).toHaveValue('coder123');

  // --- Clicking ---
  await page.locator('#submitBtn').click();

  // --- ✅ Checkboxes (direct input targets, works now) ---
  await page.locator('#option1').check();
  await page.locator('#option2').check();
  await expect(page.locator('#option1')).toBeChecked();
  await expect(page.locator('#option2')).toBeChecked();

  // --- Dropdown ---
  const fruits = page.locator('#fruits');
  await fruits.selectOption('banana');
  await expect(fruits).toHaveValue('banana');

  // --- innerText vs textContent ---
  const innerTextVal = await page.locator('#innerText-demo').innerText();
  const textContentVal = await page.locator('#textContent-demo').textContent();
  console.log('innerText value:', innerTextVal);
  console.log('textContent value:', textContentVal);

  // --- allInnerTexts vs allTextContents ---
  const allInner = await page.locator('#items li').allInnerTexts();
  const allText = await page.locator('#items li').allTextContents();
  console.log('allInnerTexts:', allInner);
  console.log('allTextContents:', allText);

  // --- Basic checks ---
  expect(allInner.length).toBe(3);
  expect(allText.length).toBe(3);
});
