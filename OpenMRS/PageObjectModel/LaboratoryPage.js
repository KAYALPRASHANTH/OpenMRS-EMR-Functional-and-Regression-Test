exports.LaboratoryPage = class LaboratoryPage{

    constructor(page){
    this.page = page;
    this.laboratory1 = "//a[text()='Laboratory']";
    this.currentMonth = "(//span[@class='cur-month'])[4]";
    }

    async laboratory(Alkaline){
        await this.page.click(this.laboratory1);
        await this.page.click("//span[text()='Tests ordered']");
        await this.page.click("(//button[@aria-label='Expand current row'])[1]");
        try {
            const Labaccept = this.page.locator("//button[text()='Pick Lab Request']");
            if (await Labaccept.isVisible()) {
                await Labaccept.click();
                await this.page.waitForTimeout(2000);
                await this.page.click("//button[text()='Pick up lab request']");
        }} catch (error) {
            // Locator not found or not clickable — silently skip
            console.log("Labaccept button not available or not clickable. Skipping...");
        }

        await this.page.click("//span[text()='In progress']");
        await this.page.click("(//input[@id='date-picker-input-id-start'])[2]");
        while(true){
            const currentM = await this.page.locator(this.currentMonth).textContent();
            const yearInput = this.page.locator("(//input[@aria-label='Year'])[4]");
            const currentYear = await yearInput.getAttribute('value');
            if(month == currentM && year == currentYear){
                break;
            }
            await this.page.click("(//span[@class='flatpickr-prev-month'])[4]");
        }
        const pickD = await this.page.$$("//span[starts-with(@class, 'date-picker-day') and not(contains(@class, 'prevMonth')) and not(contains(@class, 'nextMonth')) and text()='29']");
        for(let dt of pickD){
            if(date == await dt.textContent()){
                await dt.click()
                break;
            }
        }

        await this.page.click("(//button[@aria-label='Expand current row'])[2]");
        try{
            const rep =  this.page.click("//button[text()='Add lab results']");
            if(await rep.isVisible()){
                await rep.click();
                await this.page.waitForTimeout(2000);
                await this.page.click("//button[text()='Add lab results']");
                await this.page.fill("(//input[@type='number'])[1]",Alkaline);
            }
        }catch(error){
            console.log("No element found")
        }
        await this.page.click("//button[text()='Save and close']");
        await this.page.click("//span[text()='Completed']");
        await this.page.click("//span[text()='Declined tests']");
    }

}