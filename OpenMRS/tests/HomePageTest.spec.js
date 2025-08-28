import {test} from"@playwright/test";
import {LoginPage} from "../PageObjectModel/LoginPage";
import {HomePage} from "../PageObjectModel/HomePage";



test.describe.serial("Home Flow", () => {
    let page;

test.beforeAll(async ({ browser }) => {
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
test.skip("Set Location", async()=>{

    test.setTimeout(60000);
    const location = "Outpatient Clinic";

    //Location
    const home = new HomePage(page);
    await home.setLocation(location);
    await page.waitForTimeout(3000);

})
test("Add User", async()=>{

    test.setTimeout(60000);
    const firstName = "Nick";
    const familyName = "ERW";
    const gender = "Male";
    const month = "Aug";
    const year = 2019;
    const date = 5;
    const city = "Chennai";
    const state = "WA";
    const country = "India";
    const postalCode = "5600";
    const mobileNo = "9087654321";
    const relationshipName = "James Thompson";
    const relationship = "Child";

    //Add Petient
    const home = new HomePage(page);
    await home.addNewUser(firstName,familyName,gender,month,year,date,city,state,country,postalCode,mobileNo);
    await page.waitForTimeout(5000);
})
});