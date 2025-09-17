import { test, expect } from "@playwright/test";

test("Playwright Locator Examples", async ({ page }) => {
  // Open SauceDemo
  await page.goto("https://www.saucedemo.com/");

  // ======== getByPlaceholder ========
  const usernameInput = page.getByPlaceholder("Username");
  await usernameInput.fill("standard_user");

  const passwordInput = page.getByPlaceholder("Password");
  await passwordInput.fill("secret_sauce");

  // ======== getByRole ========
  const loginBtn = page.getByRole("button", { name: "Login" });
  await loginBtn.click();

  // ======== getByText ========
  await expect(page.getByText("Products")).toBeVisible();

  // ======== locator(), page.locator() ========
  const firstItem = page.locator(".inventory_item").first();
  await expect(firstItem).toBeVisible();

  // ======== CSS Selector ========
  const cartIcon = page.locator(".shopping_cart_link");
  await cartIcon.click();

  // Assertion
  await expect(page.locator(".cart_list")).toBeVisible();
});
