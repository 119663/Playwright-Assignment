# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Fill in the signup form and submit
- Location: tests/ui/register.spec.ts:22:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Automation Exercise - Signup"
Received: "Automation Exercise - Signup / Login"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    7 × unexpected value "Automation Exercise - Signup / Login"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
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
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Automation practice website"
  - link "TV & Video"
  - link "Automation software solutions"
- insertion:
  - iframe
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import SignupPage from '../../pages/signup';
  3  | import {faker} from '@faker-js/faker';
  4  | 
  5  | test("Navigate to signup page and register a new user", async ({page}) => {
  6  |     await page.goto('https://www.automationexercise.com/');
  7  |     await page.locator('//a[@href="/login"]').click();
  8  | 
  9  |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  10 |     await expect(page.getByText('New User Signup!')).toBeVisible();
  11 | 
  12 |     const signupPage = new SignupPage(page);
  13 |     const name = faker.person.firstName();
  14 |     const email = faker.internet.email();
  15 | 
  16 |     await signupPage.signup(name, email);
  17 | 
  18 |     await expect(page).toHaveTitle('Automation Exercise - Signup');
  19 | 
  20 | })
  21 | 
  22 | test("Fill in the signup form and submit", async ({page}) => {
  23 |     await page.goto('https://www.automationexercise.com/signup');
> 24 |     await expect(page).toHaveTitle('Automation Exercise - Signup');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  25 | 
  26 |     const signupPage = new SignupPage(page);
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
  38 |     const createAccountButton = signupPage.createAccountButton;
  39 |     
  40 |     await signupPage.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  41 | 
  42 |     await expect(page.getByText('Account Created!')).toBeVisible();
  43 |     // await page.locator('//a[@data-qa="continue-button"]').click();
  44 | 
  45 |     await expect(page.getByText('Logged in as ' + firstName)).toBeVisible();
  46 | })
  47 | 
  48 | test('Delete the created user account', async ({page}) => {
  49 |     await page.goto('https://www.automationexercise.com/');
  50 | 
  51 |     const signupPage = new SignupPage(page);
  52 |     await signupPage.deleteAccount();
  53 | 
  54 |     await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
  55 | 
  56 |     await expect(page).toHaveTitle('Automation Exercise');
  57 | 
  58 | })
```