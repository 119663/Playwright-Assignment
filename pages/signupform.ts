import { Page } from '@playwright/test';

export default class SignupForm {
    private page: Page;
    readonly title
    readonly password
    readonly day
    readonly month
    readonly year
    readonly newsletterCheckbox
    readonly offersCheckbox
    readonly firstName
    readonly lastName
    readonly company
    readonly address1
    readonly address2
    readonly country
    readonly state
    readonly city
    readonly zipcode
    readonly mobileNumber
    readonly createAccountButton
    readonly continueButton

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('//input[@id="id_gender2"]');
        this.password = page.locator('//input[@id="password"]');
        this.day = page.locator('//select[@id="days"]');
        this.month = page.locator('//select[@id="months"]');
        this.year = page.locator('//select[@id="years"]');
        this.newsletterCheckbox = page.locator('//input[@id="newsletter"]');
        this.offersCheckbox = page.locator('//input[@id="optin"]');
        this.firstName = page.locator('//input[@id="first_name"]');
        this.lastName = page.locator('//input[@id="last_name"]');
        this.company = page.locator('//input[@id="company"]');
        this.address1 = page.locator('//input[@id="address1"]');
        this.address2 = page.locator('//input[@id="address2"]');
        this.country = page.locator('//select[@id="country"]');
        this.state = page.locator('//input[@id="state"]');
        this.city = page.locator('//input[@id="city"]');
        this.zipcode = page.locator('//input[@id="zipcode"]');
        this.mobileNumber = page.locator('//input[@id="mobile_number"]');
        this.createAccountButton = page.locator('//button[@data-qa="create-account"]');
        this.continueButton = page.locator('//a[@data-qa="continue-button"]');
    }
    async navigate() {
        await this.page.goto('https://www.automationexercise.com/signup');
    }

    async fillSignupForm(password: string, firstName: string, lastName: string, company: string, address1: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        await this.title.check();
        await this.password.fill(password);
        await this.day.selectOption('1');
        await this.month.selectOption('January');
        await this.year.selectOption('2021');
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address1.fill(address1);
        await this.address2.fill(address2);
        await this.country.selectOption(country);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobileNumber.fill(mobileNumber);
        await this.createAccountButton.click();
    }
}