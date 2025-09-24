import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Live Case Study - Advanced Playwright Actions', () => {

  test('1. Handle Alerts, Confirms, Prompts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Alert
    const alertButton = page.locator('text=Click for JS Alert');
    await alertButton.highlight();
    page.once('dialog', dialog => dialog.accept());
    await alertButton.click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    // Confirm
    const confirmButton = page.locator('text=Click for JS Confirm');
    await confirmButton.highlight();
    page.once('dialog', dialog => dialog.dismiss());
    await confirmButton.click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

    // Prompt
    const promptButton = page.locator('text=Click for JS Prompt');
    await promptButton.highlight();
    page.once('dialog', dialog => dialog.accept('Playwright Rocks!'));
    await promptButton.click();
    await expect(page.locator('#result')).toHaveText('You entered: Playwright Rocks!');
  });

  test('2. Work inside local editable div', async ({ page }) => {
    const filePath = path.resolve('editable.html');
    await page.goto(`file://${filePath}`);

    const editor = page.locator('#editor');
    await editor.waitFor({ state: 'visible' });
    await editor.highlight();

    // Clear existing text and type new content
    await editor.click();
    await editor.press('Control+A');
    await editor.press('Backspace');
    await editor.type('Editing inside local editable div with Playwright!');
    
    await expect(editor).toHaveText('Editing inside local editable div with Playwright!');
  });

  test('3. Hover, Right-Click, Drag & Drop', async ({ page }) => {

    // Hover
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const figure = page.locator('.figure').first();
    await figure.highlight();
    await figure.hover();
    await expect(figure.locator('.figcaption')).toBeVisible();

    // Right-click
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const contextTarget = page.locator('span.context-menu-one');
    await contextTarget.highlight();
    await contextTarget.click({ button: 'right' });
    await expect(page.locator('.context-menu-list')).toBeVisible();

    // Drag and Drop
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const source = page.locator('#column-a');
    const target = page.locator('#column-b');
    await source.highlight();
    await target.highlight();
    await source.dragTo(target);
    await expect(target.locator('header')).toHaveText('A'); // column swapped
  });

  test('4. Local Double-Click Demo', async ({ page }) => {
    const filePath = path.resolve('double-click.html'); 
    await page.goto(`file://${filePath}`);

    const box = page.locator('#box');
    await box.highlight();
    await box.dblclick();
    await expect(box).toHaveCSS('background-color', 'rgb(255, 255, 0)');
  });

});
