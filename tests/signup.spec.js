const { test, expect } = require('@playwright/test');

test.describe('Signup Functionality', () => {
  test('User can sign up successfully', async ({ page }) => {
    // Go to the homepage
    await page.goto('https://demoblaze.com/');

    // Click on 'Sign Up' button
    await page.click('#signin2');

    // Wait for SignUp modal to appear
    await page.waitForSelector('#signInModal');

    // Fill in the sign-up form
    await page.fill('#sign-username', 'testuser');
    await page.fill('#sign-password', 'password123');

    // Click 'Sign up' button
    await page.click('button[onclick="register()"]');

    // Verify success alert appears
    await page.waitForEvent('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Sign up successful.');
      await dialog.dismiss();
    });
  });
});