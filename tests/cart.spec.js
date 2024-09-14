const { test, expect } = require('@playwright/test');

test.describe('Cart Experience', () => {
  test('User can add items to cart and verify cart contents', async ({ page }) => {
    // Go to the homepage
    await page.goto('https://demoblaze.com/');

    // Click on the first product (Samsung Galaxy S6)
    await page.click('a[href="prod.html?idp_=1"]');

    // Wait for product page to load
    await page.waitForSelector('.name');

    // Click 'Add to cart'
    await page.click('a[onclick="addToCart(1)"]');

    // Wait for alert and verify the text
    page.on('dialog', async (dialog) => {
      console.log(dialog.message());  // Verify the dialog message
      if (dialog.message() === 'Product added') {
        await dialog.accept();  // Accept the dialog
      } else {
        await dialog.dismiss();  // Optionally dismiss the dialog if needed
      }
    });

    // Go to the cart
    await page.click('#cartur', { timeout: 50000 });

    // Verify that the product is in the cart
    await page.waitForSelector('.success', { timeout: 50000 });
    await expect(page.locator('.success')).toContainText('Samsung galaxy s6');
  });
});