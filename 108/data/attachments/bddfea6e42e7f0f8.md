# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as Jennifer')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as Jennifer')

```

```yaml
- banner:
  - link "Automation Exercise website":
    - /url: /
    - img "Automation Exercise website"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Account Created!" [level=2]
- paragraph:
  - text: Congratulations! Your new account has been successfully created!
  - link "Get Writing Tools":
    - img
    - text: Get Writing Tools
- paragraph:
  - text: You can now take advantage of member privileges to enhance your online
  - link "shopping":
    - /url: "#"
    - img
    - text: shopping
  - text: experience with us.
- link "Continue":
  - /url: /
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Automation testing tools"
  - link "Automated test scripts"
  - link "Online shopping platform"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import SignupPage from '../../pages/signup';
  3  | import SignupForm from '../../pages/signupform';
  4  | import DeleteAccountPage from '../../pages/deleteaccount';
  5  | import { de, faker} from '@faker-js/faker';
  6  | import { time } from 'node:console';
  7  | 
  8  | test("Navigate to signup page and register a new user", async ({page}) => {
  9  |     test.setTimeout(60000);
  10 |     await page.goto('https://www.automationexercise.com/');
  11 |     await page.locator('//a[@href="/login"]').click();
  12 | 
  13 |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  14 |     await expect(page.getByText('New User Signup!')).toBeVisible();
  15 | 
  16 |     //signup
  17 |     const signupPage = new SignupPage(page);
  18 |     const name = faker.person.firstName();
  19 |     const email = faker.internet.email();
  20 | 
  21 |     await signupPage.signup(name, email);
  22 | 
  23 |     await expect(page).toHaveTitle('Automation Exercise - Signup');
  24 | 
  25 |     //fill signup form
  26 |     const fillSignupForm = new SignupForm(page);
  27 |     const password = faker.internet.password();
  28 |     const firstName = faker.person.firstName();
  29 |     const lastName = faker.person.lastName();
  30 |     const company = faker.company.name();
  31 |     const address1 = faker.location.streetAddress();
  32 |     const address2 = faker.location.secondaryAddress();
  33 |     const country = 'India';
  34 |     const state = faker.location.state();
  35 |     const city = faker.location.city();
  36 |     const zipcode = faker.location.zipCode();
  37 |     const mobileNumber = faker.phone.number({style: 'mobile'});
  38 |     
  39 |     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  40 | 
  41 |     await expect(page.getByText('Account Created!')).toBeVisible();
  42 |     await fillSignupForm.continueButton.click();
  43 | 
> 44 |     await expect(page.getByText('Logged in as ' + name)).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  45 | 
  46 | 
  47 |     //delete account
  48 |     const deleteAccountPage = new DeleteAccountPage(page);
  49 |     await deleteAccountPage.deleteAccount();
  50 |     await deleteAccountPage.deleteContinueButton.click();
  51 | 
  52 |     await expect(page).toHaveTitle('Automation Exercise');
  53 | 
  54 | 
  55 | })
  56 | 
```