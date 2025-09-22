
import { test, expect } from '@playwright/test';

test('Iframe context + hover, right-click, double-click, drag/drop', async ({ page, context }) => {

await page.goto('file:///C:/Users/Administrator/Delivery/Day12/iframes/index.html');


  // ----------------
  // IFRAME: switch context and interact
  // ----------------
  const frameLocator = page.frameLocator('#my-iframe'); // frameLocator keeps context
  // Click button inside iframe
  await frameLocator.locator('button#frame-btn').click();
  await expect(frameLocator.locator('#frame-result')).toHaveText('Frame button clicked');

  // Fill input inside iframe and click set
  await frameLocator.locator('input#name-input').fill('PlaywrightUser');
  await frameLocator.locator('button#set-name-btn').click();
  await expect(frameLocator.locator('#name-result')).toHaveText('Name: PlaywrightUser');

  // ----------------
  // HOVER
  // ----------------
  const hoverBox = page.locator('#hover-box');
  // ensure tooltip not visible initially by checking computed textContent (it is in DOM but hidden)
  // Hover to reveal tooltip
  await hoverBox.hover();
  await expect(page.locator('#hover-tooltip')).toBeVisible();

  // ----------------
  // RIGHT-CLICK (contextmenu)
  // ----------------
  const rightArea = page.locator('#right-click-area');
  // Right click
  await rightArea.click({ button: 'right' });
  await expect(page.locator('#context-result')).toHaveText('Right-click detected');

  // ----------------
  // DOUBLE-CLICK
  // ----------------
  const dbl = page.locator('#dblclick-btn');
  await dbl.dblclick();
  await expect(page.locator('#dbl-result')).toHaveText('Double-clicked!');

  // ----------------
  // DRAG & DROP
  // ----------------
  const drag = page.locator('#drag-item');
  const drop = page.locator('#drop-zone');
  // Use dragTo (Playwright action)
  await drag.dragTo(drop);
  await expect(page.locator('#drop-result')).toHaveText(/Dropped:/);

  // ----------------
  // (Optional) verify that we can open a new page from frame link (if used) or other tab switching examples
  // For this demo we already validated iframe interactions, and advanced actions above.
});
