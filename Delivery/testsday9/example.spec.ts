
import { test, expect } from "@playwright/test";

test("Playwright Interaction + Text Capture Demo", async ({ page }) => {
  // Navigate to demo site
  await page.goto("https://demo.playwright.dev/todomvc/");

  // ===== Type into input =====
  const todoInput = page.getByPlaceholder("What needs to be done?");
  await todoInput.type("Learn Playwright");
  await todoInput.press("Enter");

  await todoInput.type("Build CoderRange Website");
  await todoInput.press("Enter");

  // ===== Click (toggle checkbox) =====
  const firstCheckbox = page.getByRole("checkbox").first();
  await firstCheckbox.check(); // mark completed
  await expect(firstCheckbox).toBeChecked();

  // ===== Dropdown (filter selection) =====
  // In todomvc, filters are links acting like dropdown
  await page.getByText("Active").click();
  await expect(page.getByText("Learn Playwright")).not.toBeVisible();

  // ===== Capture text: innerText vs textContent =====
  const todoList = page.locator(".todo-list li").first();

  const innerTextVal = await todoList.innerText();
  const textContentVal = await todoList.textContent();

  console.log("innerText =>", innerTextVal);
  console.log("textContent =>", textContentVal);

  // ===== allInnerTexts vs allTextContents =====
  const allInnerTexts = await page.locator(".todo-list li").allInnerTexts();
  const allTextContents = await page.locator(".todo-list li").allTextContents();

  console.log("allInnerTexts =>", allInnerTexts);
  console.log("allTextContents =>", allTextContents);
});
