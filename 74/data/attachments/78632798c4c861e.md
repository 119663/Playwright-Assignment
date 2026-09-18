# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login.spec.ts >> Login with valid credentials
- Location: tests/ui/login.spec.ts:5:5

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
        - generic: PG3CH7xEM6AhBsrJ9le7Ybolwfszj4FXLDdpNBB7v49PrdNSBMrXiejnDOmmOt3x
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: PG3CH7xEM6AhBsrJ9le7Ybolwfszj4FXLDdpNBB7v49PrdNSBMrXiejnDOmmOt3x
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
      - link "API integration services" [ref=e79] [cursor=pointer]:
        - generic "API integration services" [ref=e80]
        - img [ref=e82]
      - link "Automation practice website" [ref=e84] [cursor=pointer]:
        - generic "Automation practice website" [ref=e85]
        - img [ref=e87]
      - link "Language Resources" [ref=e89] [cursor=pointer]:
        - generic "Language Resources" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f9e1]:
        - generic [active]:
          - generic [ref=f11e1]:
            - generic [ref=f11e2]:
              - generic:
                - img [ref=f11e6] [cursor=pointer]
                - button [ref=f11e8] [cursor=pointer]:
                  - img [ref=f11e9]
            - insertion [ref=f11e17]:
              - generic [ref=f11e18]:
                - link "Click Here" [ref=f11e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CumVHKMpUat-ICYj8-cAP2M3QqQSsgLzogQH53ZqN4hTDhuiblUYQASD9tJ6VAWCVi-YEoAGex5rPPsgBCagDAcgDmwSqBJICT9Bb7UZrUkLz3qTYBAp-3juo21LE6LyTeM8EGGWEH-8rZlIYBTMN8_2LHwcRsX7gJkCowkX6UlmAULsUWe6s4yAImQPCJO76nIs9Wfw1snye7CTUX7QuNczhxGl1oQn_zVL6miDvjB1FUyiwXeOtg_qhP0_3x5I22-74eMOQtEgAkWo9VGL5O63ejbQeclY_U9vU0YGNm9LfrjYMreDn9XXS4DXu5I7xBYENzFCklhEdct6Rf2XFXxWqrGRYOs56jWTxyrIflEPk4RSWzp8vAhogwWnYXOk7CyX8Adr3XJZrByAzsRv9WPoqTNZlgJT-PZmOlCDA3G5Z_g1CvvKcsYkFQHfHZyOoDhvpkUqBytQsmMAE6P-CwrMF4AQDiAXT3_HZVZAGAaAGTYAHnv_qrhmoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOCdq83Ez5UDYAGACgGYCwHICwGADAGqDQJLReoNEwiiw6zNxM-VAxUIfh4CHdgmNEXwDQGIDgmwE6nBrCPQEwDYEwrYFAHQFQHKFgIKAPgWAYAXAbIXBBgCUAboFwSyGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQShwIAEQoqgVdDH4Cs1Gdic4VEiyZD7dCKnVnBXe1rCCL68i3_cvfRdulftfPywYQlGNSp8aOCnUT2mSO8hhSCh4he6HgfKr9Yj2UFdrIm9jVkRfT14hOTUdsvo1PJwIngBIW-sFM9vYGiXGmrcqS4cF4BO862mOas8sQtIYsOTH4n6Ziaz_siik1IL57Q3LYih7eLnyPgUgPzq8EFtvYyq7p09uzrZHAZE5oZdYaUhHjtVbWBCE7e9-wmmN5d2Mkmz9rYNll0rF0JVaMUfl32UxUNcTkkEwlPXqGGGzjZ4Haumzb60d7DLUNbPTWiMeDL3-gWH43H86MalDTD3_0SSYzy91-8WlY7SxgB&sig=AOD64_1gwx-z1Wca4CUGF5V3tvXAbOjf2Q&client=ca-pub-1677597403311019&dbm_c=AKAmf-AUSJW-BjXY-AqG9Fzuk5D-TBxEjlSTTTtuH3U2joGl7GBHX2VQR08JdslIP9FwuXNNo-Vpm098c7ezCvIfPsCN96Gx6VjblFmhC0IlVSG5niCHYphDngj5X2ejhQWe-BPOGGPiBfaX_7H4k_hJw-CzwNUhpnvowjZzjqGF750ORO827dGFyN9RJxhAdFJe_ecHADVkNrQrTzvXb4cazz2zTbYiUa6uB_FNrKpaQZWBb8WwttRAZjLfmsoz5UB3eL91wyqeEzvT6ApJSIbX8NV7ZeqY9w_yfwaTlIHQHsXJFPjOPo0&cry=1&dbm_d=AKAmf-AWMDOHKLPlcmMfBGDlbClhNKj3gOs7AK_oMSH0a3m9zpoH0ip76-MvH3mrSPn_TVIKR4NdRs6BJv02sTt-O9VfY34mAkXBsz9-rwi0YlnzvrLcgvY-WmTmbwEbfPab5Y2Vwoxyd7Tkwyg4j1r0ypxcji_G40IQSEoKH0sNqdcN5EtAxU8R5lUbUF2k9P0CqqGBynNfnvB-LAjNoZlqtrnMmjC8ppC42j6UnizbtbO_IouoAhS0h5pK59T2pvnMaBXWKFIaSWWPq05AEtQN7EidMR0EoynG8MquNcFbZrJ74XW89efQjUjEZW_FTijrZXGgAX3d7ONX_aZJjyNaqN15jseUsEu-rYXijUh5eGrHIVFCD4zrX1g9CJIpvy_QvTf6thvlBSgA2SNIp-VE2-zby4qRf1t2lTUt6hhy1r1dvSxLBvjod7BwRl-fQvb-vasMLymrjUXewRG2K3ID1NdU5wHUMlH-AqYu1dA9qFoJTh_6X610Hr2WrmdSq8AzzE-guUlJ61MFHdKqbyfyEfGjIrWeKhMwvoOF6QkIyr_cinsfDqoUUY5ymeYrLygXqiojHEOAjYOe77UYJ_vkkfX_UsjHT3p7fs955JVq1kDggtQVqUTMCHbWefVF9KuntFO08smow99sNjioalcD7Xl-Nb0GpjWC-4UVX6QSg2yJ7cshVvYPfKnQxuXQNJce_gp1rAja_4epnpFQfHEhhIJgK0OT_Q&adurl=https://servedby.flashtalking.com/click/1/275018;9918625;6157889;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jZ8oRElVJcyXPjfXlLq_b-&ft_impID=3453CE1A-19E9-28E3-2397-EEB5AA1C25D1&g=6768DB9C80892C&random=769061.3542529612&ft_width=728&ft_height=90&url=https://www.adobe.com/africa/acrobat/free-trial-download.html?sdid=B8NR3JZH&mv=display&mv2=display
                  - img "Click Here" [ref=f11e20]
                - link "AdChoices arrow" [ref=f11e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f11e23]
                - link "Privacy Notification" [ref=f11e25]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f11e26]
                - link "Privacy Notification" [ref=f11e28]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f11e29]
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