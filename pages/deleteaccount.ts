import { Page } from '@playwright/test';

export default class DeleteAccountPage {
    private page: Page;
    readonly deleteAccountButton;
    readonly deleteContinueButton;

    constructor(page: Page) {
        this.page = page;
        this.deleteAccountButton = page.locator('//a[@href="/delete_account"]');
        this.deleteContinueButton = page.locator('//a[@data-qa="continue-button"]');
    }

    async navigate() {
        await this.page.goto('https://www.automationexercise.com/');
    }

    async deleteAccount() {
        await this.deleteAccountButton.click();
    }
}