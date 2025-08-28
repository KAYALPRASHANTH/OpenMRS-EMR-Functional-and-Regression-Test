import { expect } from "@playwright/test";
exports.HomePage = class HomePage{
    constructor(page){
        this.page = page;
        this.locationChange = "//div[@data-extension-id='location-changer']";
        this.locationList = "//span[@class='cds--radio-button__label-text']//span[text()]";
        this.validate = "//button[@type='submit']";

        this.addUser = "//button[@name='AddPatientIcon']";
        this.editPicture = "//button[@type='button']//span[text()='Edit']";
        this.uplordpic = "//input[@type='file']";
        this.changePicName = "//input[@id='caption']";
        this.addPic = "//button[text()='Add image']";
        this.fName = "//input[@id='givenName']";
        this.famName = "//input[@id='familyName']";
        this.currentMonth = "//span[@class='_7NbEeva10EfXeuduzcuO7g==']//span";
    }

    async setLocation(location){
        await this.page.click(this.locationChange);
        const loc = await this.page.locator(`//span//span[text()='${location}']`);
        await loc.click();
        await this.page.click(this.validate);
        const con = await this.page.locator(`//span[text()='${location}']`);
        expect(con).toHaveText(location);
    }

    async addNewUser(firstName,familyName,gender,month,year,date,city,state,country,postalCode,mobileNo){
        await this.page.click(this.addUser);
        await this.page.waitForTimeout(3000);

        //Patient Details
        await this.page.waitForSelector(this.editPicture, { state: 'visible' });
        await this.page.click(this.editPicture);
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(this.uplordpic, { state: 'visible' });
        await this.page.locator(this.uplordpic).setInputFiles("Pictures\\patient.jpg");
        await this.page.fill(this.changePicName,firstName);
        await this.page.click(this.addPic);
        await this.page.waitForTimeout(3000);
        await this.page.fill(this.fName,firstName);
        await this.page.fill(this.famName,familyName);
        await this.page.click(`//span[text()='${gender}']`);
        await this.page.getByRole('button', { name: 'Calendar Date of birth' }).click();
        while(true){
            const currentM = await this.page.locator(this.currentMonth).textContent();
            const yearInput = this.page.locator("//input[@inputmode='numeric']");
            const currentYear = await yearInput.getAttribute('value');
            if(month == currentM && year == currentYear){
                break;
            }
            await this.page.click("//button[@aria-label='Previous']");
        }
        const pickD = await this.page.$$("//div[@class='cds--date-picker__day' and not(@aria-disabled='true')]");
        for(let dt of pickD){
            if(date == await dt.textContent()){
                await dt.click()
                break;
            }
        }

        //Contact Details
        await this.page.waitForTimeout(5000);
        await this.page.fill("//input[@id='cityVillage']",city);
        await this.page.fill("//input[@id='stateProvince']",state);
        await this.page.fill("//input[@id='country']",country);
        await this.page.fill("//input[@id='postalCode']",postalCode);
        await this.page.fill("//input[@id='phone']",mobileNo);

        //Relationship Details 
        await this.page.waitForTimeout(3000);
        await this.page.click("//button[text()='Add Relationship']");
        await this.page.fill("//input[@placeHolder='Firstname Familyname']",relationshipName);
        await this.page.click(`//li[contains(text(), '${relationshipName}')]`)
        await this.page.click("//select[@title='Relationship to patient']");
        await this.page.click("//div[contains(@class, 'option')][text()='Parent']")

        await this.page.click("//button[text()='Register patient']");
        try {
            // Wait for dialog to appear with timeout
            await this.page.waitForSelector('text=Discard', { timeout: 5000 });
            await this.page.click('text=Discard');
            console.log('Discard dialog handled');
        } catch (error) {
            console.log('No discard dialog found, continuing...', error.message);
            // Continue with the test even if dialog doesn't appear
         }
        await this.page.waitForSelector("[aria-label='OpenMRS Logo']", {state: 'visible'});
        await this.page.click('svg[aria-label="OpenMRS Logo"]', { force: true });
        await this.page.waitForSelector("//p[@class='P5kBN-q2g2nkNYCgydQ1vg==']", {state: 'visible'});

    }
}