
import { test, expect } from '@playwright/test';

test.describe('Flipkart – Checkout Actions', () => {
  test('Fill shipping, check terms, select payment', async ({ page }) => {

    
    await page.goto('https://www.flipkart.com');

    // Close login popup
    await page.locator('button:has-text("✕")').click();

    // Go to cart
    await page.goto('https://www.flipkart.com/viewcart?exploreMode=true');

    // Fill shipping address
    await page.locator('input[name="pincode"]').fill('560001');

    // Checkbox: gift wrap
    const giftWrap = page.locator('input[type="checkbox"][value="giftWrap"]');
    if (!(await giftWrap.isChecked())) {
      await giftWrap.check();
    }

    // Dropdown: Payment method
    await page.locator('select[name="payment"]').selectOption('CreditCard');

    // Capture order summary
    const orderSummary = await page.locator('.summary-total').innerText();
    console.log('Order Total:', orderSummary);
  });
});
