# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/user.spec.ts >> User tests
- Location: tests/api/user.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Account deleted!"
Received: "Bad request, email parameter is missing in DELETE request."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { faker } from '@faker-js/faker';
  3  | 
  4  | test("User tests", async ({ request }) => {
  5  | 
  6  |     const postresponse = await request.post('https://automationexercise.com/api/createAccount', {
  7  |         form: {
  8  |             name: "Brian",
  9  |             email: "Brian98@yahoo.com",
  10 |             password: "Binary@1234",
  11 |             title: "Mr",
  12 |             birth_date: "10",
  13 |             birth_month: "May",
  14 |             birth_year: "1990",
  15 |             firstname: faker.person.firstName(),
  16 |             lastname: faker.person.lastName(),
  17 |             company: faker.company.name(),
  18 |             address1: faker.location.streetAddress(),
  19 |             address2: faker.location.secondaryAddress(),
  20 |             country: "India",
  21 |             zipcode: faker.location.zipCode(),
  22 |             state: faker.location.state(),
  23 |             city: faker.location.city(),
  24 |             mobile_number: faker.string.numeric('+254 ### ### ###')
  25 |         }
  26 |     })
  27 | 
  28 |     const postresponsebody = await postresponse.json();
  29 |     console.log(postresponsebody);
  30 | 
  31 | 
  32 |     expect(postresponse.status()).toBe(200);
  33 |     expect(postresponsebody.message).toBe("User created!");
  34 |     expect(postresponsebody.responseCode).toBe(201);
  35 | 
  36 | 
  37 |     const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
  38 |         form: {
  39 |             name: "Gachua",
  40 |             email: "Brian98@yahoo.com",
  41 |             password: "Binary@1234",
  42 |             title: "Mr",
  43 |             birth_date: "10",
  44 |             birth_month: "May",
  45 |             birth_year: "1990",
  46 |             firstname: faker.person.firstName(),
  47 |             lastname: faker.person.lastName(),
  48 |             company: faker.company.name(),
  49 |             address1: faker.location.streetAddress(),
  50 |             address2: faker.location.secondaryAddress(),
  51 |             country: "India",
  52 |             zipcode: faker.location.zipCode(),
  53 |             state: faker.location.state(),
  54 |             city: faker.location.city(),
  55 |             mobile_number: faker.string.numeric('+254 ### ### ###')
  56 |         }
  57 |     })
  58 |     const putresponsebody = await putresponse.json();
  59 |     console.log(putresponsebody);
  60 | 
  61 |     expect(putresponse.status()).toBe(200);
  62 |     expect(putresponsebody.message).toBe("User updated!");
  63 |     expect(putresponsebody.responseCode).toBe(200);
  64 | 
  65 | 
  66 |     const deleteresponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
  67 |         data: {
  68 |             email: faker.internet.email(),
  69 |             password: faker.internet.password()
  70 |         }
  71 |     })
  72 |     const deleteresponsebody = await deleteresponse.json();
  73 |     console.log(deleteresponsebody);
  74 | 
  75 |     expect(deleteresponse.status()).toBe(200);
> 76 |     expect(deleteresponsebody.message).toBe("Account deleted!");
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  77 |     expect(deleteresponsebody.responseCode).toBe(200);
  78 | })
```