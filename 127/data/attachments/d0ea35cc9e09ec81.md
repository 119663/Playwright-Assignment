# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/login.spec.ts >> Verify Login API
- Location: tests/api/login.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "User exists!"
Received: "Bad request, email or password parameter is missing in POST request."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import users from '../../testdata/users.json';
  3  | 
  4  | test("Verify Login API", async ({ request }) => {
  5  |     const postresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  6  |        data:{
  7  |         email:users[0].email,
  8  |         password:users[0].password
  9  |        }
  10 |     })
  11 |     const postresponsebody = await postresponse.json();
  12 |     console.log(postresponsebody);
  13 | 
  14 |     expect(postresponse.status()).toBe(200);
> 15 |     expect(postresponsebody.message).toBe("User exists!");
     |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  16 |     expect(postresponsebody.responseCode).toBe(200);
  17 | 
  18 | 
  19 |     const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  20 |         data:{
  21 |             email:users[1].email,
  22 |             password:users[1].password
  23 |         }
  24 |     })
  25 |     const invalidpostresponsebody = await invalidpostresponse.json();
  26 |     console.log(invalidpostresponsebody);
  27 | 
  28 |     expect(invalidpostresponse.status()).toBe(200);
  29 |     expect(invalidpostresponsebody.message).toBe("User not found!");
  30 |     expect(invalidpostresponsebody.responseCode).toBe(404);
  31 | 
  32 | 
  33 |     const emptyemailpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  34 |         data:{
  35 |             password:users[0].password
  36 |         }
  37 |     })
  38 |     const emptyemailpostresponsebody = await emptyemailpostresponse.json();
  39 |     console.log(emptyemailpostresponsebody);
  40 | 
  41 |     expect(emptyemailpostresponse.status()).toBe(200);
  42 |     expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
  43 |     expect(emptyemailpostresponsebody.responseCode).toBe(400);
  44 | })
  45 | 
  46 | 
```