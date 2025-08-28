import {test} from"@playwright/test";
import {LoginPage} from "../PageObjectModel/LoginPage";
import { LaboratoryPage } from "../PageObjectModel/LaboratoryPage";

test.describe.serial("Lab List test", () =>{
    let page;

    test.beforeAll(async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        test.setTimeout(60000);
        const username = "admin";
        const password = "Admin123";

        //LogIn
        const login = new LoginPage(page);
        await login.clearBrowserData();
        await login.goToWebsite();
        await login.loginAsAdmin(username,password);
        await page.waitForTimeout(3000);
    })
    test("Lab Test", async () =>{
    
        const Alkaline =26;
        const lab = new LaboratoryPage(page);
        await lab.laboratory(Alkaline);
})
})