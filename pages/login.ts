import { Page } from '@playwright/test';

export default class loginPage {
    private page: Page;
    readonly email
    readonly password
    readonly loginButton

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('//input[@data-qa="login-email"]');
        this.password = page.locator('//input[@data-qa="login-password"]');
        this.loginButton = page.locator('//button[@data-qa="login-button"]');
    }
    async navigate() {
        await this.page.goto('https://www.automationexercise.com/login');
    }
    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}
