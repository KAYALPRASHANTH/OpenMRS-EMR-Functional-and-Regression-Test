import {test} from"@playwright/test";
import {LoginPage} from "../PageObjectModel/LoginPage";

test("Login Page Test" , async({page}) => {

    const username = "admin";
    const password = "Admin123";

    const login = new LoginPage(page);
    await login.goToWebsite();
    await login.loginAsAdmin(username,password)
});
