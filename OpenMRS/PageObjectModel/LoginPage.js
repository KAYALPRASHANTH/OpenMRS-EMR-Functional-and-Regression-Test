import {expect} from "@playwright/test";
exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page;
        this.usernameBox = "//input[@id='username']";
        this.continue = "//button[@type='button']";
        this.passwordBox = "//input[@id='password']";
        this.showPassword = "//button[@type='button']";
        this.submit = "//button[@type='submit']";
    }

    async clearBrowserData() {
        try {
            // Clear localStorage and sessionStorage
            await this.page.evaluate(() => {
                localStorage.clear();
                sessionStorage.clear();
            });
          
            // Clear cookies
            await this.page.context().clearCookies();
            console.log('Browser data cleared successfully!');
        } catch (error) {
            console.log(`Error clearing browser data: ${error}`);
        }
    }

    async goToWebsite(){
        await this.page.goto("https://o3.openmrs.org/openmrs/spa/login");
        await this.page.evaluate(() => {
        document.documentElement.requestFullscreen();
    });
    }

    async loginAsAdmin(username,password){
        await expect(this.page).toHaveTitle("OpenMRS")
        await this.page.waitForSelector(this.usernameBox, { state: 'visible' });
        await this.page.click(this.usernameBox);
        await this.page.fill(this.usernameBox,username);
        await this.page.click(this.continue); //or
      //await this.page.keyboard.press("Enter");
        await this.page.fill(this.passwordBox,password);
        await this.page.click(this.showPassword);
        await this.page.waitForTimeout(2000);
        await this.page.click(this.showPassword);
        await this.page.click(this.submit);
    }
}