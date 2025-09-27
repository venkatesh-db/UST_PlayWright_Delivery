
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Dynamic Locator Examples', () => {

  test.beforeEach(async ({ page }) => {

       const htmlPath = `file://${path.resolve('C:/Users/Administrator/Delivery/Day17/realtimedynamiclocator/index.html')}`;
        await page.goto(htmlPath);
 
  });

  // ===== BASIC =====
  test('basic dynamic text locator', async ({ page }) => {
    const buttonText = 'Click Me';
    await page.locator(`text=${buttonText}`).click();
  });

  // ===== INTERMEDIATE =====
  test('locator with dynamic attribute', async ({ page }) => {
    const userId = '102';
    await page.locator(`#user_${userId}`).click();
  });

test('locator with partial text', async ({ page }) => {
  // Pick the first element that contains 'User'
  await page.locator('div:has-text("User")').first().click();
});

  test('loop through dynamic list', async ({ page }) => {
    const items = page.locator('.todo');
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();
      if (text?.includes('Learn Playwright')) {
        await items.nth(i).click();
        break;
      }
    }
  });

  // ===== ADVANCED =====
  test('dynamic xpath locator', async ({ page }) => {
    const userId = '101';
    await page.locator(`xpath=//div[contains(@id,'${userId}')]`).click();
  });

  test('dynamic data-testid locator', async ({ page }) => {
    const testId = 'submit-btn';
    await page.locator(`[data-testid="${testId}"]`).click();
  });

  test('dynamic input with regex', async ({ page }) => {
    await page.locator('input[id^="name"]').fill('John Doe');
    await page.locator('input[id^="email"]').fill('john@example.com');
  });

});
