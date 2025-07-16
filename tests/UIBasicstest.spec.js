
const { test, expect } = require('@playwright/test');

test('First playwright test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    const passwd = page.locator('#password');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill('rahulshetty');
    await passwd.fill('learning');
    await page.locator('#signInBtn').click();
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');
    await username.clear();
    await username.fill('rahulshettyacademy');
    await passwd.clear();
    await passwd.fill('learning');
    await page.locator('#signInBtn').click();
    await expect(page.locator("app-card:nth-child(1) .card-body a")).toHaveText('iPhone X');
})

test("ui essentials", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    const passwd = page.locator('#password');
    const docLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator('select.form-control');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    expect(await page.locator('.radiotextsty').last().isChecked()).toBeFalsy();
    await page.locator('#okayBtn').click();
    await expect(docLink).toHaveAttribute('class' ,'blinkingText');
})

test('childPageSwitch', async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const docLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all( 
        [
        context.waitForEvent('page'),
        docLink.click(),
    ]
);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(await newPage.locator(".red").textContent());
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&");
    await page.pause();






}


)