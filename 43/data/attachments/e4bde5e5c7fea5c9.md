# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:5:5

# Error details

```
Error: locator.fill: Unsupported token "@data-qa" while parsing css selector "input[@data-qa="signup-name"]". Did you mean to CSS.escape it?
Call log:
  - waiting for input[@data-qa="signup-name"]

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: E9KpnLR9eL1Q2OC0WUYJN3y5qGsIDJhYOkD75PQuIzNGewBOEuj0s0hbRIGbBfAD
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: E9KpnLR9eL1Q2OC0WUYJN3y5qGsIDJhYOkD75PQuIzNGewBOEuj0s0hbRIGbBfAD
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e68]:
      - insertion [ref=e70]:
        - generic [ref=e73]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e75]: Discover more
          - link "API testing tools" [ref=e76] [cursor=pointer]:
            - generic "API testing tools" [ref=e77]
            - img [ref=e79]
          - link "Automation testing tutorials" [ref=e81] [cursor=pointer]:
            - generic "Automation testing tutorials" [ref=e82]
            - img [ref=e84]
          - link "Dictionaries & Encyclopedias" [ref=e86] [cursor=pointer]:
            - generic "Dictionaries & Encyclopedias" [ref=e87]
            - img [ref=e89]
      - paragraph [ref=e93]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export default class SignupPage {
  4  |     private page: Page;
  5  |     readonly name
  6  |     readonly email
  7  |     readonly signupButton
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.name = page.locator('input[@data-qa="signup-name"]');
  12 |         this.email = page.locator('input[@data-qa="signup-email"]');
  13 |         this.signupButton = page.locator('button[@data-qa="signup-button"]');
  14 |     }
  15 |     async navigate() {
  16 |         await this.page.goto('https://www.automationexercise.com/login');
  17 |     }
  18 |     async signup(name: string, email: string) {
> 19 |         await this.name.fill(name);
     |                         ^ Error: locator.fill: Unsupported token "@data-qa" while parsing css selector "input[@data-qa="signup-name"]". Did you mean to CSS.escape it?
  20 |         await this.email.fill(email);
  21 |         await this.signupButton.click();
  22 |     }
  23 | }
```