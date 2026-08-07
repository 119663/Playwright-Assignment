# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/login.spec.ts >> Verify Login API
- Location: tests/api/login.spec.ts:4:5

# Error details

```
SyntaxError: Unexpected token '<', "


<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import users from '../../testdata/users.json';
  3  | 
  4  | test("Verify Login API", async ({ request }) => {
  5  |     //POST To Verify Login with valid details
  6  |     const postresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  7  |         form: {
  8  |             email: users[0].email,
  9  |             password: users[0].password
  10 |         }
  11 |     })
> 12 |     const postresponsebody = await postresponse.json();
     |                              ^ SyntaxError: Unexpected token '<', "
  13 |     console.log(postresponsebody);
  14 | 
  15 |     expect(postresponse.status()).toBe(200);
  16 |     expect(postresponsebody.message).toBe("User exists!");
  17 |     expect(postresponsebody.responseCode).toBe(200);
  18 | 
  19 | 
  20 |     //POST To Verify Login with invalid details
  21 |     const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  22 |         form: {
  23 |             email: users[1].email,
  24 |             password: users[1].password
  25 |         }
  26 |     })
  27 |     const invalidpostresponsebody = await invalidpostresponse.json();
  28 |     console.log(invalidpostresponsebody);
  29 | 
  30 |     expect(invalidpostresponse.status()).toBe(200);
  31 |     expect(invalidpostresponsebody.message).toBe("User not found!");
  32 |     expect(invalidpostresponsebody.responseCode).toBe(404);
  33 | 
  34 | 
  35 |     //POST To Verify Login without email parameter
  36 |     const emptyemailpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  37 |         form: {
  38 |             password: users[0].password
  39 |         }
  40 |     })
  41 |     const emptyemailpostresponsebody = await emptyemailpostresponse.json();
  42 |     console.log(emptyemailpostresponsebody);
  43 | 
  44 |     expect(emptyemailpostresponse.status()).toBe(200);
  45 |     expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
  46 |     expect(emptyemailpostresponsebody.responseCode).toBe(400);
  47 | 
  48 |     
  49 |     //GET user account detail by email
  50 |     const getuserbyemail = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
  51 |         params: {
  52 |             email: users[0].email
  53 |         }
  54 |     })
  55 |     const getuserbyemailbody = await getuserbyemail.json();
  56 |     console.log(getuserbyemailbody);
  57 |     expect(getuserbyemail.status()).toBe(200);
  58 |     expect(getuserbyemailbody.responseCode).toBe(200);
  59 | })
  60 | 
  61 | 
```