import {test} from "@playwright/test";

test("practice name of test case", async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('//input[@id="password"]').fill("secret_sauce");
    await page.locator('#login-button').click();

} );