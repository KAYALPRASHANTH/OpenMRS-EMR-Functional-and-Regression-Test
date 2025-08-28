import {test} from"@playwright/test";
import {LoginPage} from "../PageObjectModel/LoginPage";
import { PatientListPage } from "../PageObjectModel/PatientListPage";

test.describe.serial("Patient List test", () =>{
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
test("PatientList", async () =>{
    
    const listName = "Mine";

    const list = new PatientListPage(page);
    await list.patientlist(listName);
})
})