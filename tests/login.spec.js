const { test, expect } = require('@playwright/test');

test.describe('Login Functionality', () => {
  test('User can log in successfully', async ({ page }) => {
    // Go to the homepage
    await page.goto('https://demoblaze.com/');

    // Click on 'Log In' button
    await page.click('#login2');

    // Wait for Login modal to appear
    await page.waitForSelector('#logInModal');

    // Fill in the login form
    await page.fill('#loginusername', 'testuser');
    await page.fill('#loginpassword', 'password123');

    // Click 'Log in' button
    await page.click('button[onclick="logIn()"]');

    // Verify that the user is logged in (check for "Welcome" text)
    await expect(page.locator('#nameofuser')).toHaveText('Welcome testuser');
  });
});