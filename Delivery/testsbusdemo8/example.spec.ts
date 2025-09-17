
import { test, expect } from '@playwright/test';
import path from "path";

test('bus search form works', async ({ page }) => {
  const filepath = "file://" + path.resolve(__dirname, "../index.html");
  await page.goto(filepath);

  await page.locator("#src").fill("Bangalore");
  await page.locator("#dest").fill("Trivandrum");
  await page.locator("#date").fill("2025-09-20");

  await page.locator("#search_btn").click();

  await expect(page.locator("#result")).toHaveText("Search successful!");
});
