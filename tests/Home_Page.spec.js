//const { test, expect } = require ('@playwright/test');
import { test, expect } from '@playwright/test';

test('Home Page', async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURl = await page.url();
    console.log('Page URL is:', pageURl);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.click('id=signin2');
    
    await page.fill('id=sign-username', 'abcgcd');
    
    await page.fill('id=sign-password', '123');

    await page.click("//button[normalize-space()='Sign up']");

    page.on('dialog', async dialog => {
        // 3. Do stuff with the dialog here (reject/accept etc.)
        console.log(dialog.message());
        await dialog.accept()
    });

    await page.close();

})



