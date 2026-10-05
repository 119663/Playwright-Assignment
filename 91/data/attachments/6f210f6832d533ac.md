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

Expected: "User updated!"
Received: "Account not found!"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { faker } from '@faker-js/faker';
  3  | 
  4  | test("User tests", async ({ request }) => {
  5  |     const name = faker.person.firstName();
  6  |     const email = faker.internet.email();
  7  | 
  8  |     console.log("Name:", name);
  9  |     console.log("Email:", email);
  10 | 
  11 |     const postresponse = await request.post('https://automationexercise.com/api/createAccount', {
  12 |         form: {
  13 |             name: name,
  14 |             email: email,
  15 |             password: faker.internet.password(),
  16 |             title: "Mrs",
  17 |             birth_date: "10",
  18 |             birth_month: "May",
  19 |             birth_year: "1990",
  20 |             firstname: faker.person.firstName(),
  21 |             lastname: faker.person.lastName(),
  22 |             company: faker.company.name(),
  23 |             address1: faker.location.streetAddress(),
  24 |             address2: faker.location.secondaryAddress(),
  25 |             country: "India",
  26 |             zipcode: faker.location.zipCode(),
  27 |             state: faker.location.state(),
  28 |             city: faker.location.city(),
  29 |             mobile_number: faker.string.numeric('+254 ### ### ###')
  30 |         }
  31 |     })
  32 | 
  33 |     const postresponsebody = await postresponse.json();
  34 |     console.log(postresponsebody);
  35 | 
  36 | 
  37 |     expect(postresponse.status()).toBe(200);
  38 |     expect(postresponsebody.message).toBe("User created!");
  39 |     expect(postresponsebody.responseCode).toBe(201);
  40 | 
  41 | 
  42 |     const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
  43 |         form: {
  44 |             name: faker.person.firstName(),
  45 |             email: faker.internet.email(),
  46 |             password: faker.internet.password(),
  47 |             title: "Mrs",
  48 |             birth_date: "10",
  49 |             birth_month: "May",
  50 |             birth_year: "1990",
  51 |             firstname: faker.person.firstName(),
  52 |             lastname: faker.person.lastName(),
  53 |             company: faker.company.name(),
  54 |             address1: faker.location.streetAddress(),
  55 |             address2: faker.location.secondaryAddress(),
  56 |             country: "India",
  57 |             zipcode: faker.location.zipCode(),
  58 |             state: faker.location.state(),
  59 |             city: faker.location.city(),
  60 |             mobile_number: faker.string.numeric('+254 ### ### ###')
  61 |         }
  62 |     })
  63 |     const putresponsebody = await putresponse.json();
  64 |     console.log(putresponsebody);
  65 | 
  66 |     expect(putresponse.status()).toBe(200);
> 67 |     expect(putresponsebody.message).toBe("User updated!");
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  68 |     expect(putresponsebody.responseCode).toBe(200);
  69 | 
  70 | 
  71 |     const deleteresponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
  72 |         data: {
  73 |             email: faker.internet.email(),
  74 |             password: faker.internet.password()
  75 |         }
  76 |     })
  77 |     const deleteresponsebody = await deleteresponse.json();
  78 |     console.log(deleteresponsebody);
  79 | 
  80 |     expect(deleteresponse.status()).toBe(200);
  81 |     expect(deleteresponsebody.message).toBe("Account deleted!");
  82 |     expect(deleteresponsebody.responseCode).toBe(200);
  83 | })
```