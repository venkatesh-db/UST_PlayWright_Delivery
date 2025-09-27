
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Dynamic Locator Best Practices', () => {
  test.beforeEach(async ({ page }) => {


   const htmlPath = `file://${path.resolve('C:/Users/Administrator/Delivery/Day17/playwright-news-demo/index.html')}`;
        await page.goto(htmlPath);
 
     

  });

  test('Click "Read More" on the third article using partial text', async ({ page }) => {
  await page.locator('.article:has-text("Economy") >> button:has-text("Read More")').click();
});


  test('Click "Read More" on the first article using data-testid', async ({ page }) => {
    await page.locator('[data-testid="read-more-1"]').click();
  });

  test('Click "Read More" on the second article using text content', async ({ page }) => {
    await page.locator('button:has-text("Read More")').nth(1).click();
  });

 
  test('Scroll into view and click "Load More" button', async ({ page }) => {
    const loadMoreButton = page.locator('#load-more');
    await loadMoreButton.scrollIntoViewIfNeeded();
    await loadMoreButton.click();
  });

  test('Loop through articles and click "Read More" on the one containing "Tech"', async ({ page }) => {
    const articles = page.locator('.article');
    const count = await articles.count();
    for (let i = 0; i < count; i++) {
      const title = await articles.nth(i).locator('h2').textContent();
      if (title?.includes('Tech')) {
        await articles.nth(i).locator('button').click();
        break;
      }
    }
  });
});
