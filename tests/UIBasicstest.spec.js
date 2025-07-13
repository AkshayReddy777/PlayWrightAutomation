
const {test, expect} = require('@playwright/test');

test('First playwright test',async ({browser}) =>
{

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
await expect(page.locator("app-card:nth-child(1) .card-body a")).toHaveText('iphone X');
})