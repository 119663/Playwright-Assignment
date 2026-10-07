# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as Pamela')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as Pamela')

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
  - link "Visual Art & Design":
    - img
    - text: Visual Art & Design
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
  - link "E-Commerce Services"
  - link "How-To, DIY & Expert Content"
  - link "Member privilege programs"
```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test';
  2   | import SignupPage from '../../pages/signup';
  3   | import SignupForm from '../../pages/signupform';
  4   | import DeleteAccountPage from '../../pages/deleteaccount';
  5   | import {de, faker} from '@faker-js/faker';
  6   | 
  7   | test("Navigate to signup page and register a new user", async ({page}) => {
  8   |     await page.goto('https://www.automationexercise.com/');
  9   |     await page.locator('//a[@href="/login"]').click();
  10  | 
  11  |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  12  |     await expect(page.getByText('New User Signup!')).toBeVisible();
  13  | 
  14  |     const signupPage = new SignupPage(page);
  15  |     const name = faker.person.firstName();
  16  |     const email = faker.internet.email();
  17  | 
  18  |     await signupPage.signup(name, email);
  19  | 
  20  |     await expect(page).toHaveTitle('Automation Exercise - Signup');
  21  | 
  22  |     // await page.goto('https://www.automationexercise.com/signup');
  23  |     // await page.locator('//a[@href="/signup"]').click();
  24  |     // await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  25  | 
  26  |     const fillSignupForm = new SignupForm(page);
  27  |     const password = faker.internet.password();
  28  |     const firstName = faker.person.firstName();
  29  |     const lastName = faker.person.lastName();
  30  |     const company = faker.company.name();
  31  |     const address1 = faker.location.streetAddress();
  32  |     const address2 = faker.location.secondaryAddress();
  33  |     const country = 'India';
  34  |     const state = faker.location.state();
  35  |     const city = faker.location.city();
  36  |     const zipcode = faker.location.zipCode();
  37  |     const mobileNumber = faker.phone.number({style: 'mobile'});
  38  |     // const createAccountButton = signupPage.createAccountButton;
  39  |     
  40  |     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  41  | 
  42  |     await expect(page.getByText('Account Created!')).toBeVisible();
  43  |     // await page.locator('//a[@data-qa="continue-button"]').click();
  44  | 
> 45  |     await expect(page.getByText('Logged in as ' + firstName)).toBeVisible();
      |                                                               ^ Error: expect(locator).toBeVisible() failed
  46  | 
  47  |     await fillSignupForm.continueButton.click();
  48  | 
  49  |     // await page.goto('https://www.automationexercise.com/');
  50  | 
  51  |     const deleteAccountPage = new DeleteAccountPage(page);
  52  |     await deleteAccountPage.deleteAccount();
  53  | 
  54  |     await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
  55  | 
  56  |     await deleteAccountPage.deleteContinueButton.click();
  57  | 
  58  |     await expect(page).toHaveTitle('Automation Exercise');
  59  | 
  60  | 
  61  | })
  62  | 
  63  | // test("Fill in the signup form and submit", async ({page}) => {
  64  | //     await page.goto('https://www.automationexercise.com/signup');
  65  | //     await page.locator('//a[@href="/signup"]').click();
  66  | //     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  67  | 
  68  | //     const fillSignupForm = new SignupForm(page);
  69  | //     const password = faker.internet.password();
  70  | //     const firstName = faker.person.firstName();
  71  | //     const lastName = faker.person.lastName();
  72  | //     const company = faker.company.name();
  73  | //     const address1 = faker.location.streetAddress();
  74  | //     const address2 = faker.location.secondaryAddress();
  75  | //     const country = 'India';
  76  | //     const state = faker.location.state();
  77  | //     const city = faker.location.city();
  78  | //     const zipcode = faker.location.zipCode();
  79  | //     const mobileNumber = faker.phone.number({style: 'mobile'});
  80  | //     // const createAccountButton = signupPage.createAccountButton;
  81  |     
  82  | //     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  83  | 
  84  | //     await expect(page.getByText('Account Created!')).toBeVisible();
  85  | //     // await page.locator('//a[@data-qa="continue-button"]').click();
  86  | 
  87  | //     await expect(page.getByText('Logged in as ' + firstName)).toBeVisible();
  88  | // })
  89  | 
  90  | // test('Delete the created user account', async ({page}) => {
  91  | //     await page.goto('https://www.automationexercise.com/');
  92  | 
  93  | //     const deleteAccountPage = new DeleteAccountPage(page);
  94  | //     await deleteAccountPage.deleteAccount();
  95  | 
  96  | //     await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
  97  | 
  98  | //     await expect(page).toHaveTitle('Automation Exercise');
  99  | 
  100 | // })
```