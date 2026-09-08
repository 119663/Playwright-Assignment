# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:5:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Automation Exercise - Signup"
Received: "Automation Exercise - Signup / Login"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Automation Exercise - Signup / Login"

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
  - link "Internet & Telecom"
  - link "TV & Video Equipment"
  - link "Programming"
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
> 9  |     await expect(page).toHaveTitle('Automation Exercise - Signup');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  10 | 
  11 |     const signupPage = new SignupPage(page);
  12 |     const name = faker.person.firstName();
  13 |     const email = faker.internet.email();
  14 | 
  15 |     await signupPage.signup(name, email);
  16 | 
  17 |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  18 | 
  19 | })
```