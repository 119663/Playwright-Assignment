# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login.spec.ts >> Login with valid credentials
- Location: tests/ui/login.spec.ts:5:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Automation Exercise - Signup / Login"
Received: "One moment, please..."
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "One moment, please..."
    - waiting for navigation to finish...
    - navigated to "https://www.automationexercise.com/login"
    - unexpected value "One moment, please..."

```

```yaml
- text: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import loginPage from '../../pages/login';
  3  | import users from '../../testdata/users.json';
  4  | 
  5  | test ("Login with valid credentials", async ({page}) => {
  6  |     const login = new loginPage(page);
  7  |     await login.navigate();
> 8  |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  9  | 
  10 |     await login.login(users[0].email, users[0].password);
  11 | 
  12 | })
  13 | 
  14 | test ("Login with invalid credentials", async ({page}) => {
  15 | 
  16 |     const login = new loginPage(page);
  17 |     await login.navigate();
  18 |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  19 | 
  20 |     await login.login(users[1].email, users[1].password);
  21 | 
  22 |     await expect(page.locator('//p[@style="color: red;"]')).toHaveText('Your email or password is incorrect!');
  23 | 
  24 | })
```