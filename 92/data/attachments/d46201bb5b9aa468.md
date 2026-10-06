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
Received: "Bad request, email parameter is missing in PUT request."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {faker} from '@faker-js/faker';
  3  | 
  4  | test("User tests", async ({ request }) => {
  5  |     const postresponse = await request.post('https://automationexercise.com/api/createAccount', {
  6  |        form:{
  7  |             name: faker.person.firstName(),
  8  |             email: faker.internet.email(),
  9  |             password: faker.internet.password(),
  10 |             title: "Mrs",
  11 |             birth_date: "10",
  12 |             birth_month: "May",
  13 |             birth_year: "1990",
  14 |             firstname: faker.person.firstName(),
  15 |             lastname: faker.person.lastName(),
  16 |             company: faker.company.name(),
  17 |             address1: faker.location.streetAddress(),
  18 |             address2: faker.location.secondaryAddress(),
  19 |             country: "India",
  20 |             zipcode: faker.location.zipCode(),
  21 |             state: faker.location.state(),
  22 |             city: faker.location.city(),
  23 |             mobile_number: faker.string.numeric( '+254 ### ### ###')
  24 |        }
  25 |     })
  26 | 
  27 |     const postresponsebody = await postresponse.json();
  28 |     console.log(postresponsebody);
  29 | 
  30 | 
  31 |     expect(postresponse.status()).toBe(200);
  32 |     expect(postresponsebody.message).toBe("User created!");
  33 |     expect(postresponsebody.responseCode).toBe(201);
  34 | 
  35 | 
  36 |     const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
  37 |         data:{
  38 |             name: faker.person.firstName(),
  39 |             email: faker.internet.email(),
  40 |             password: faker.internet.password(),
  41 |             title: "Mrs",
  42 |             birth_date: "10",
  43 |             birth_month: "May",
  44 |             birth_year: "1990",
  45 |             firstname: faker.person.firstName(),
  46 |             lastname: faker.person.lastName(),
  47 |             company: faker.company.name(),
  48 |             address1: faker.location.streetAddress(),
  49 |             address2: faker.location.secondaryAddress(),
  50 |             country: "India",
  51 |             zipcode: faker.location.zipCode(),
  52 |             state: faker.location.state(),
  53 |             city: faker.location.city(),
  54 |             mobile_number: faker.string.numeric( '+254 ### ### ###') 
  55 |         }
  56 |     })
  57 |     const putresponsebody = await putresponse.json();
  58 |     console.log(putresponsebody);
  59 | 
  60 |     expect(putresponse.status()).toBe(200);
> 61 |     expect(putresponsebody.message).toBe("User updated!");
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  62 |     expect(putresponsebody.responseCode).toBe(200);
  63 | 
  64 | 
  65 |     const deleteresponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
  66 |         data:{
  67 |             email: faker.internet.email(),
  68 |             password: faker.internet.password()
  69 |         }
  70 |     })
  71 |     const deleteresponsebody = await deleteresponse.json();
  72 |     console.log(deleteresponsebody);
  73 |     
  74 |     expect(deleteresponse.status()).toBe(200);
  75 |     expect(deleteresponsebody.message).toBe("Account deleted!");
  76 |     expect(deleteresponsebody.responseCode).toBe(200);
  77 | })
```