# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('[data-qa="account-deleted"]')
Expected pattern: /account deleted/i
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('[data-qa="account-deleted"]')

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
- list:
  - listitem
  - listitem
  - listitem
- heading "AutomationExercise" [level=1]
- heading "Full-Fledged practice website for Automation Engineers" [level=2]
- paragraph:
  - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
  - link "Factory Automation":
    - img
    - text: Factory Automation
- link "Test Cases":
  - /url: /test_cases
  - button "Test Cases"
- link "APIs list for practice":
  - /url: /api_list
  - button "APIs list for practice"
- img "demo website for practice"
- link "":
  - /url: "#slider-carousel"
- link "":
  - /url: "#slider-carousel"
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Test automation services"
  - link "Automation testing community"
  - link "Apparel"
  - link "Software testing tutorials"
  - link "E-commerce practice site"
  - link "Automation practice website"
  - link "Dresses"
  - link "Test automation courses"
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- heading "Features Items" [level=2]
- img "ecommerce website products"
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/1
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph:
  - text: Men
  - link "Tshirt":
    - /url: "#"
    - img
    - text: Tshirt
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Men Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/2
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph:
  - text: Sleeveless
  - link "Dress":
    - /url: "#"
    - img
    - text: Dress
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Sleeveless Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/3
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/4
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/5
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/6
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/7
- img "ecommerce website products"
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/8
- img "ecommerce website products"
- heading "Rs. 499" [level=2]
- paragraph:
  - text: Sleeves Printed Top - White
  - link "Educational Resources":
    - img
    - text: Educational Resources
- text:  Add to cart
- heading "Rs. 499" [level=2]
- paragraph: Sleeves Printed Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/11
- img "ecommerce website products"
- heading "Rs. 359" [level=2]
- paragraph: Half Sleeves Top Schiffli Detailing - Pink
- text:  Add to cart
- heading "Rs. 359" [level=2]
- paragraph: Half Sleeves Top Schiffli Detailing - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/12
- img "ecommerce website products"
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/13
- img "ecommerce website products"
- heading "Rs. 679" [level=2]
- paragraph: Full Sleeves Top Cherry - Pink
- text:  Add to cart
- heading "Rs. 679" [level=2]
- paragraph: Full Sleeves Top Cherry - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/14
- img "ecommerce website products"
- heading "Rs. 315" [level=2]
- paragraph:
  - text: Printed Off Shoulder Top - White
  - link "Internet & Telecom":
    - img
    - text: Internet & Telecom
- text:  Add to cart
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/15
- img "ecommerce website products"
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/16
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/18
- img "ecommerce website products"
- heading "Rs. 1050" [level=2]
- paragraph:
  - text: Sleeveless Unicorn Patch Gown - Pink
  - link "Software":
    - img
    - text: Software
- text:  Add to cart
- heading "Rs. 1050" [level=2]
- paragraph: Sleeveless Unicorn Patch Gown - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/19
- img "ecommerce website products"
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/20
- img "ecommerce website products"
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/21
- img "ecommerce website products"
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/22
- img "ecommerce website products"
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/23
- img "ecommerce website products"
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/24
- img "ecommerce website products"
- heading "Rs. 1299" [level=2]
- paragraph:
  - text: Pure Cotton V-Neck
  - link "T-Shirt":
    - /url: "#"
    - img
    - text: T-Shirt
- text:  Add to cart
- heading "Rs. 1299" [level=2]
- paragraph: Pure Cotton V-Neck T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/28
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/29
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/30
- img "ecommerce website products"
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/31
- img "ecommerce website products"
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/33
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/35
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/37
- img "ecommerce website products"
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/38
- img "ecommerce website products"
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/39
- img "ecommerce website products"
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/40
- img "ecommerce website products"
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/41
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/42
- img "ecommerce website products"
- heading "Rs. 1389" [level=2]
- paragraph:
  - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
  - link "Jeans":
    - img
    - text: Jeans
- text:  Add to cart
- heading "Rs. 1389" [level=2]
- paragraph: GRAPHIC DESIGN MEN T SHIRT - BLUE
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/43
- heading "recommended items" [level=2]
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- link "":
  - /url: "#recommended-item-carousel"
- link "":
  - /url: "#recommended-item-carousel"
- insertion
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import SignupPage from '../../pages/signup';
  3  | import SignupForm from '../../pages/signupform';
  4  | import DeleteAccountPage from '../../pages/deleteaccount';
  5  | import { de, faker} from '@faker-js/faker';
  6  | 
  7  | test("Navigate to signup page and register a new user", async ({page}) => {
  8  |     await page.goto('https://www.automationexercise.com/');
  9  |     await page.locator('//a[@href="/login"]').click();
  10 | 
  11 |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  12 |     await expect(page.getByText('New User Signup!')).toBeVisible();
  13 | 
  14 |     const signupPage = new SignupPage(page);
  15 |     const name = faker.person.firstName();
  16 |     const email = faker.internet.email();
  17 | 
  18 |     await signupPage.signup(name, email);
  19 | 
  20 |     await expect(page).toHaveTitle('Automation Exercise - Signup');
  21 | 
  22 | 
  23 |     const fillSignupForm = new SignupForm(page);
  24 |     const password = faker.internet.password();
  25 |     const firstName = faker.person.firstName();
  26 |     const lastName = faker.person.lastName();
  27 |     const company = faker.company.name();
  28 |     const address1 = faker.location.streetAddress();
  29 |     const address2 = faker.location.secondaryAddress();
  30 |     const country = 'India';
  31 |     const state = faker.location.state();
  32 |     const city = faker.location.city();
  33 |     const zipcode = faker.location.zipCode();
  34 |     const mobileNumber = faker.phone.number({style: 'mobile'});
  35 |     
  36 |     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  37 | 
  38 |     await expect(page.getByText('Account Created!')).toBeVisible();
  39 |     await fillSignupForm.continueButton.click();
  40 | 
  41 |     await expect(page.getByText('Logged in as ' + name)).toBeVisible();
  42 | 
  43 | 
  44 | 
  45 |     const deleteAccountPage = new DeleteAccountPage(page);
  46 |     await deleteAccountPage.deleteAccount();
  47 | 
  48 |     // await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
> 49 |     await expect(page.locator('[data-qa="account-deleted"]')).toHaveText(/account deleted/i);
     |                                                               ^ Error: expect(locator).toHaveText(expected) failed
  50 | 
  51 |     await expect(deleteAccountPage.deleteContinueButton).toBeVisible();
  52 |     await expect(deleteAccountPage.deleteContinueButton).toBeEnabled();
  53 |     await deleteAccountPage.deleteContinueButton.click();
  54 | 
  55 |     await expect(page).toHaveTitle('Automation Exercise');
  56 | 
  57 | 
  58 | })
  59 | 
  60 | // test("Fill in the signup form and submit", async ({page}) => {
  61 | //     await page.goto('https://www.automationexercise.com/signup');
  62 | //     await page.locator('//a[@href="/signup"]').click();
  63 | //     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  64 | 
  65 | //     const fillSignupForm = new SignupForm(page);
  66 | //     const password = faker.internet.password();
  67 | //     const firstName = faker.person.firstName();
  68 | //     const lastName = faker.person.lastName();
  69 | //     const company = faker.company.name();
  70 | //     const address1 = faker.location.streetAddress();
  71 | //     const address2 = faker.location.secondaryAddress();
  72 | //     const country = 'India';
  73 | //     const state = faker.location.state();
  74 | //     const city = faker.location.city();
  75 | //     const zipcode = faker.location.zipCode();
  76 | //     const mobileNumber = faker.phone.number({style: 'mobile'});
  77 | //     // const createAccountButton = signupPage.createAccountButton;
  78 |     
  79 | //     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  80 | 
  81 | //     await expect(page.getByText('Account Created!')).toBeVisible();
  82 | //     // await page.locator('//a[@data-qa="continue-button"]').click();
  83 | 
  84 | //     await expect(page.getByText('Logged in as ' + firstName)).toBeVisible();
  85 | // })
  86 | 
  87 | // test('Delete the created user account', async ({page}) => {
  88 | //     await page.goto('https://www.automationexercise.com/');
  89 | 
  90 | //     const deleteAccountPage = new DeleteAccountPage(page);
  91 | //     await deleteAccountPage.deleteAccount();
  92 | 
  93 | //     await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
  94 | 
  95 | //     await expect(page).toHaveTitle('Automation Exercise');
  96 | 
  97 | // })
```