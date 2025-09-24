
// tests/selectors.spec.js
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Advanced CSS selectors demo', () => {
  test.beforeEach(async ({ page }) => {
    // open local index.html
    const htmlPath = `file://${path.resolve('C:/Users/Administrator/Delivery/Day15/cssfolders/index.html')}`;
    await page.goto(htmlPath);
  });

  test('attribute selectors', async ({ page }) => {
    const admin = page.locator('[data-role="admin"]');
    await admin.highlight();  // highlight Admin
    await expect(admin).toBeVisible();

    const userIds = page.locator('[data-id^="user-"]');
    await userIds.highlight();  // highlight user-456
    await expect(userIds).toHaveCount(1);

    await page.pause(); // inspector for manual debugging
  });

  test('pseudo-classes', async ({ page }) => {
    const oddItems = page.locator('ol > li:nth-child(odd)');
    await oddItems.first().highlight(); // highlight first odd (One)
    await expect(oddItems).toHaveCount(3);

    const notFirst = page.locator('ol > li.special:not(:first-child)');
    await notFirst.first().highlight(); // highlight "Two"
    await expect(notFirst.first()).toHaveText('Two');

    await page.pause();
  });

  test('combinators', async ({ page }) => {
    const directChild = page.locator('.parent > .child');
    await directChild.highlight(); // highlight Direct child
    await expect(directChild).toBeVisible();

    const adjacent = page.locator('.sibling-a + .sibling-b');
    await adjacent.highlight(); // highlight Sibling B
    await expect(adjacent).toHaveText('Sibling B (adjacent to A?)');

    await page.pause();
  });

  test(':is grouping', async ({ page }) => {
    const interactive = page.locator(':is(button.btn, a.link)');
    await interactive.first().highlight(); // highlight first match (Primary button)
    await expect(interactive).toHaveCount(3);

    await page.pause();
  });

  test(':has relational selector', async ({ page }) => {
    const cardWithDesc = page.locator('div.card:has(.desc)');
    await cardWithDesc.highlight(); // highlight Card A
    await expect(cardWithDesc).toHaveCount(1);
    await expect(cardWithDesc.locator('h3')).toHaveText('Card A');
  });
});
