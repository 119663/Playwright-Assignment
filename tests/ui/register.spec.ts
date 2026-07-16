import {test, expect} from '@playwright/test';
import SignupPage from '../../pages/signup';
import SignupForm from '../../pages/signupform';
import DeleteAccountPage from '../../pages/deleteaccount';
import { de, faker} from '@faker-js/faker';
import { time } from 'node:console';

test("Navigate to signup page and register a new user", async ({page}) => {
    test.setTimeout(60000);
    await page.goto('https://www.automationexercise.com/');
    await page.locator('//a[@href="/login"]').click();

    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
    await expect(page.getByText('New User Signup!')).toBeVisible();

    //signup
    const signupPage = new SignupPage(page);
    const name = faker.person.firstName();
    const email = faker.internet.email();

    await signupPage.signup(name, email);

    await expect(page).toHaveTitle('Automation Exercise - Signup');

    //fill signup form
    const fillSignupForm = new SignupForm(page);
    const password = faker.internet.password();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const company = faker.company.name();
    const address1 = faker.location.streetAddress();
    const address2 = faker.location.secondaryAddress();
    const country = 'India';
    const state = faker.location.state();
    const city = faker.location.city();
    const zipcode = faker.location.zipCode();
    const mobileNumber = faker.phone.number({style: 'mobile'});
    
    await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);

    await expect(page.getByText('Account Created!')).toBeVisible();
    await fillSignupForm.continueButton.click();

    await expect(page.getByText('Logged in as ' + name)).toBeVisible();


    //delete account
    const deleteAccountPage = new DeleteAccountPage(page);
    await deleteAccountPage.deleteAccount();

    // await expect(page).toHaveTitle('Account Deleted!');

    // await expect(deleteAccountPage.deleteContinueButton).toBeVisible();
    // await expect(deleteAccountPage.deleteContinueButton).toBeEnabled();
    await deleteAccountPage.deleteContinueButton.click();

    await expect(page).toHaveTitle('Automation Exercise');


})
