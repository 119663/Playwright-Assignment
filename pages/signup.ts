import { Page } from '@playwright/test';

export default class SignupPage {
    private page: Page;
    readonly name
    readonly email
    readonly signupButton

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator('//input[@data-qa="signup-name"]');
        this.email = page.locator('//input[@data-qa="signup-email"]');
        this.signupButton = page.locator('//button[@data-qa="signup-button"]');

    }
    async navigate() {
        await this.page.goto('https://www.automationexercise.com/login');
    }
    async signup(name: string, email: string) {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.signupButton.click();
    }

}