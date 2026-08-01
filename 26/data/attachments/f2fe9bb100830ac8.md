# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login.spec.ts >> Login with invalid credentials
- Location: tests/ui/login.spec.ts:14:5

# Error details

```
Error: locator.fill: Unsupported token "@data-qa" while parsing css selector "input[@data-qa="login-email"]". Did you mean to CSS.escape it?
Call log:
  - waiting for input[@data-qa="login-email"]

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
        - generic: RU9mbHZrD1t7o48nGFaB9LEoiFl6n5Cu5ByE6slM5hADy1GvhAUeAv4xSyQJCsRQ
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: RU9mbHZrD1t7o48nGFaB9LEoiFl6n5Cu5ByE6slM5hADy1GvhAUeAv4xSyQJCsRQ
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
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Networking" [ref=e79] [cursor=pointer]:
        - generic "Networking" [ref=e80]
        - img [ref=e82]
      - link "Software testing resources" [ref=e84] [cursor=pointer]:
        - generic "Software testing resources" [ref=e85]
        - img [ref=e87]
      - link "API test cases" [ref=e89] [cursor=pointer]:
        - generic "API test cases" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f9e1]:
        - generic [active]:
          - insertion [ref=f12e2]:
            - generic [ref=f12e3]:
              - link "Click Here" [ref=f12e4]:
                - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CqtQiKMpUavf3CL2TiM0P6ZSz8QKsgLzogQH53ZqN4hTDhuiblUYQASD9tJ6VAWCVi-YEoAGex5rPPsgBCagDAcgDmwSqBJICT9ANdQzOG3J6GrxswUruUFaMiP3rQoMFmH0zAIR9i0ZaUkzVdcyeDN4_4jnYcfCee049OYIq3PXT8TwDt4XRFoojZAtacp1EBH0-jrB37RwOcj4ym1ypfDzK2zkbYbm_cjIzh16WW4BT2tSNbWOqqQUUGzBRCySJw-6nxkOCiQnjda4GbQLEQIEvR_ujY-mS9YYUgUBw0xQMb1taHDbCvZ-0aXXxOy7geBvD1lXgg1WOdMnIFmQr_jmxW1zSbRY9Ylz113au8PA3FRinhvJKJadv9606osrz53FBhbriIeXA1Z9GPNFiehVThqF4gZeXD-jM0YWQe3lu6fFiHUK9qW0C6hsZvYLMAl7tctyAucvuvsAE6P-CwrMF4AQDiAXT3_HZVZAGAaAGTYAHnv_qrhmoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKSEq83Ez5UDYAGACgGYCwHICwGADAGiDAwqCgoIjt-xApXisQKqDQJLReoNEwiCtazNxM-VAxW9CaIDHWnKLC7wDQGIDgmwE6nBrCPQEwDYEwrYFAHQFQHKFgIKAPgWAYAXAbIXBBgCUAboFwSyGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQShwIAEQoqgZ58ULO3feXgvdL7HAdTaqRxeSaAKI_NgluIKwG1tz3OdfvWLq1dikgsuHKUnL69gZEmaSRzVOMu2akh0c7-FCi0OIpq1Fu4nRjjT173mesZn9r4kPx1Riq5Zj4xYnnOC5PYKb8tikVv4VrWSWTUecXdFc2_K9vVq8V1p6_rKpSWvxYQ_ghSoJve0LQY3iOsFScJZch06vSbyqZuT6peIuH1sRWfEQmFg4e2uaFoXFcS1Hp1udPzJXbeMS76lhUTY2QkZOQNnUdYouzYTzds6vECTNdNt02eHjGevHG3JhvGmSyNkIKUp-KYbBEvFEEtMKF8_XYRZdEOwE5K6ej5c649VhgB&sig=AOD64_3eX7Mj3X8ox_D4rwUM7R6TEaQi1g&client=ca-pub-1677597403311019&dbm_c=AKAmf-CfSv5Iqddz3D99_qDAdJHscjJbPMZoJkYe8bUlYjx8q7O6udEBPFKrE6CDn45z-VqCv5KGXm77LTKJH81Agx3i-r7lJWjTO2s0VxTyYmC3EJesk0_FTLIxUAG0PZiRb_fPY09hpMo6kms4BY6utJ4gHz0FB0ZtU2tAG4d_k31komgdElGvRg2eJuMO7rLYfeHPgQtsphWpi6H-xpAPOhnQ0NORklA6EMJeAAqc89kYdG-d_k6tjIoNil6PCDDO6Viy9doyxqKb-HFb_Y3S4lTs6TX_03qfa_yXA1Tq07V-kQ7Z37A&cry=1&dbm_d=AKAmf-DWiw57iXckg_SGJuw8vsxKB30HXujzYlJCkRZemV6IxfJw6j3h1apfoT9B2Qn8ExHOlxU2MHGzqDU61GkaY85ARn2KKRfQZmK2LuCf4FLdfTFgSMVxc1tBnb65S3216BAJwJ4Gt3My5oKBS1d9YHVr5B49V_bLNjSlzkPdTYq3JrS68DNmUeQ3b5iTn-uk1QC8LtaU32sN87nz8xzhaBsA_asKOauPwsf6fOGMZvi8RCPxfmnByDSNWPRBOnKO3eC9nF0EsJ7DieOSkEKieDmVS26cLICkR6B4VxnO1-jlNGpmWHVxmuD0vRu3j42i5K0YdfKSkl-uD4epMRkooxIu7tQZvnZHglMBRufUZiliwLXJ8hlAVwLCv9YYnMNwaZ5pNtbb4cxGLUN04sbFnkmXCZyIOJuwdVtDJyyf2odt24y-2VrV4MYFyz0kR3sbqcIwPr1SOeT_9aoWxG0Pcz5jHiJoE1r97G-1nzoJOPGzc2IUUxwHOHeA5VbZS9TwlWuW3tb2224gLuXyxDs7wC_02wVMRQdwqJjKbPkjuiVlAlnsKX6W5EpqpKJA7WeutmfBHdQ3IzQhvjSiv_3Je9NVz5wX9CRMlPPjWbyFdsntr1Lrn5lX7V8IFusSo4HJKU2trLzIADrgVx2CzUJYc7bivse4lbF25qwVWccOvW85yLN0Eqn4AKJXO5fiPK7ggukGNmdMHR_SwZXC-HMDMOhPzw-eBA&adurl=https://servedby.flashtalking.com/click/1/275018;9918625;6157895;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0hPZfRTqu7PThAsocB8sc3s&ft_impID=415A9CD9-DA4E-751C-0D0B-8EE37529CCF1&g=6768841E9B66EC&random=731676.0329514928&ft_width=728&ft_height=90&url=https://www.adobe.com/africa/acrobat/free-trial-download.html?sdid=B8NR3JZH&mv=display&mv2=display
                - img "Click Here" [ref=f12e5]
              - link "AdChoices arrow" [ref=f12e7]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img "AdChoices arrow" [ref=f12e8]
              - link "Privacy Notification" [ref=f12e10]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img [ref=f12e11]
              - link "Privacy Notification" [ref=f12e13]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img [ref=f12e14]
          - iframe
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export default class loginPage {
  4  |     private page: Page;
  5  |     readonly email
  6  |     readonly password
  7  |     readonly loginButton
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.email = page.locator('input[@data-qa="login-email"]');
  12 |         this.password = page.locator('input[@data-qa="login-password"]');
  13 |         this.loginButton = page.locator('button[@data-qa="login-button"]');
  14 |     }
  15 |     async navigate() {
  16 |         await this.page.goto('https://www.automationexercise.com/login');
  17 |     }
  18 |     async login(email: string, password: string) {
> 19 |         await this.email.fill(email);
     |                          ^ Error: locator.fill: Unsupported token "@data-qa" while parsing css selector "input[@data-qa="login-email"]". Did you mean to CSS.escape it?
  20 |         await this.password.fill(password);
  21 |         await this.loginButton.click();
  22 |     }
  23 | }
```