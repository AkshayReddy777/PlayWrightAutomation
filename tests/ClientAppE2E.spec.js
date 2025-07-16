
const {test, expect} = require('@playwright/test');

test.only("Login into client app" , async({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
const products = page.locator(".card-body");
const productname = page.locator(".card-body b");
const productName = 'ZARA COAT 3';
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator('#userEmail').fill("akshay.dornala1@gmail.com");
await page.locator('#userPassword').fill("123123Aa@");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle');
console.log(await page.title() + " ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
/* await page.waitForFunction(() => {
  return document.querySelectorAll(products).count > 5;
}); */
const titles = await productname.allTextContents();
console.log(titles);
const count = await products.count();
console.log(count);
for( let i = 0; i < count ; i++){
    console.log(await products.nth(i).locator('b').allTextContents());
    if(await products.nth(i).locator("b").textContent() == productName){
        console.log(i)
        await products.nth(i).locator("text = Add To Cart").click();
        await page.waitForLoadState('networkidle');
            break;
    }

}
await page.locator("[routerlink='/dashboard/cart']").click();
await expect(page.locator("h3:has-text('ZARA COAT 3')")).toHaveText(productName);
await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
await page.locator('text=Checkout').click();
await page.locator("input[placeholder*='Select']").pressSequentially("Ind");
await page.locator("section.ta-results").waitFor();
const dropdown = await page.locator(".ta-results");
 const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
await page.locator('text=place order').click();
const id = await page.locator('.em-spacer-1 .ng-star-inserted').allTextContents();
await page.locator("button[routerlink*='myorders']").click();
await page.locator("td[class='box']").waitFor();
expect((await page.locator('tbody > tr').nth(1).allTextContents()).includes(id));

await page.pause();

})