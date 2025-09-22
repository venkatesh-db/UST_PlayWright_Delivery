import { test, expect } from '@playwright/test';

test('Static & Dynamic Table Traversal', async ({ page }) => {

  
  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project4/index.html');

  // --- Static Table ---
  const rows = await page.locator('#static-table tr').allInnerTexts();
  console.log('Static Table Rows:', rows);
  expect(rows).toContainEqual('Laptop\t1000');

  const phonePrice = await page.locator('#static-table tr:nth-child(3) td:nth-child(2)').innerText();
  expect(phonePrice).toBe('500');

  // --- Dynamic Table ---
  await page.locator('text=Add Row').click();
  await page.locator('text=Add Row').click();

  const dynamicRows = await page.locator('#dynamic-table tr').allInnerTexts();
  console.log('Dynamic Table Rows:', dynamicRows);
  expect(dynamicRows.length).toBeGreaterThan(1); // header + new rows
});

test('Multi-tab Handling', async ({ page, context }) => {

  await page.goto('file://C:/Users/Administrator/Delivery/Day11/project4/index.html');


  const [newboss]= await Promise.all(
    [
      context.waitForEvent('page'),
      page.locator('#new-tab-link').click()
    ]
  );  


  await newboss.waitForLoadState()
  const retunvalue=await newboss.locator("#tab-heading").innerText();
  expect(retunvalue).toBe('Welcome to the new tab!')



});

test('Isolated Sessions with Login', async ({ browser }) => {
  // Session 1


  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  
  await page1.goto('file://C:/Users/Administrator/Delivery/Day11/project4/index.html');

  await page1.locator('#username').fill('admin');
  await page1.locator('#password').fill('1234');

  // ✅ Use getByRole to avoid strict mode violation
  await page1.getByRole('button', { name: 'Login' }).click();
  await expect(page1.locator('#login-message')).toHaveText('Login Successful!');

  // Session 2 (fresh, independent)
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto('file://C:/Users/Administrator/Delivery/Day11/project4/index.html');

  // Should not be logged in
  await expect(page2.locator('#login-message')).toHaveText('');
});
