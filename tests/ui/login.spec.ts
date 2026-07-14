import {test, expect} from '@playwright/test';
import loginPage from '../../pages/login';
import users from '../../testdata/users.json';

test ("Login with valid credentials", async ({page}) => {
    const login = new loginPage(page);
    await login.navigate();
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

    await login.login(users[0].email, users[0].password);

})

test ("Login with invalid credentials", async ({page}) => {

    const login = new loginPage(page);
    await login.navigate();
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

    await login.login(users[1].email, users[1].password);

    await expect(page.locator('//p[@style="color: red;"]')).toHaveText('Your email or password is incorrect!');

})