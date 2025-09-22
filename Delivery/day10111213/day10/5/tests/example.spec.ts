
import { test, expect } from '@playwright/test';

test('Handle Alerts, Confirms, and Prompts', async ({ page }) => {
  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project5/alerts-tabs.html');

  // --- Alert ---
  page.once('dialog', async dialog => {
    console.log('Alert text:', dialog.message());
    await dialog.accept();
  });
  await page.locator('#alert-btn').click();

  // --- Confirm (accept) ---
  page.once('dialog', async dialog => {
    console.log('Confirm text:', dialog.message());
    await dialog.accept(); // click OK
  });
  await page.locator('#confirm-btn').click();
  await expect(page.locator('#confirm-result')).toHaveText('Confirm result: true');

  // --- Confirm (dismiss) ---
  page.once('dialog', async dialog => {
    console.log('Confirm text:', dialog.message());
    await dialog.dismiss(); // click Cancel
  });
  await page.locator('#confirm-btn').click();
  await expect(page.locator('#confirm-result')).toHaveText('Confirm result: false');

  // --- Prompt ---
  page.once('dialog', async dialog => {
    console.log('Prompt text:', dialog.message());
    await dialog.accept('Playwright User'); // input text
  });
  await page.locator('#prompt-btn').click();
  await expect(page.locator('#prompt-result')).toHaveText('Prompt result: Playwright User');
});

test('Switch Between Windows/Tabs', async ({ page, context }) => {
  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project5/alerts-tabs.html');

  // Listen for new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#new-tab-link').click()
  ]);

  await newPage.waitForLoadState();
  const heading = await newPage.locator('#tab-heading').innerText();
  expect(heading).toBe('Welcome to the new tab!');

  // Switch back to original tab
  await page.bringToFront();
  expect(await page.locator('#alert-btn').isVisible()).toBeTruthy();
});
