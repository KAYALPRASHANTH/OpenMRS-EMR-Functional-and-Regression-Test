exports.PatientListPage = class PatientListPage{
    constructor(page){
        this.page = page;
        this.patientList = "//a[text()='Patient lists']";
        this.newList = "//button[@data-openmrs-role='New List']"
        this.listNameBox = "//input[@class='cds--text-input']";
        this.confrimList = "//button[text()='Create list']";

        this.sharedList = "//span[text()='Starred lists']";
        this.systemList = "//span[text()='System lists']";
        this.myLists = "//span[text()='My lists']";
        this.back = "//span[text()='Back to lists page']";
        this.allList = "//span[text()='All lists']";

    }

    async patientlist(listName){
        await this.page.click(this.patientList);
        await this.page.click(this.newList);
        await this.page.fill(this.listNameBox, listName);
        await this.page.click(this.confrimList);

        await this.page.click(this.sharedList);
        await this.page.click(this.systemList);
        await this.page.click(this.myLists);
        await this.page.click(`//a[text()='${listName}']`);
        await this.page.click(this.back);
        await this.page.click(this.allList);
    }
    
}