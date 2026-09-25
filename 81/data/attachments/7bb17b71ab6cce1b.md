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

Expected: "User exists!"
Received: "Bad request, email or password parameter is missing in POST request."
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { fa, faker } from '@faker-js/faker';
  3   | 
  4   | test("User tests", async ({ request }) => {
  5   |     const name = faker.person.firstName();
  6   |     const email = faker.internet.email();
  7   |     const password = faker.internet.password();
  8   | 
  9   | 
  10  |     const postresponse = await request.post('https://automationexercise.com/api/createAccount', {
  11  |         form: {
  12  |             name: name,
  13  |             email: email,
  14  |             password: password,
  15  |             title: "Mr",
  16  |             birth_date: "10",
  17  |             birth_month: "May",
  18  |             birth_year: "1990",
  19  |             firstname: faker.person.firstName(),
  20  |             lastname: faker.person.lastName(),
  21  |             company: faker.company.name(),
  22  |             address1: faker.location.streetAddress(),
  23  |             address2: faker.location.secondaryAddress(),
  24  |             country: "India",
  25  |             zipcode: faker.location.zipCode(),
  26  |             state: faker.location.state(),
  27  |             city: faker.location.city(),
  28  |             mobile_number: faker.string.numeric('+254 ### ### ###')
  29  |         }
  30  |     })
  31  | 
  32  |     const postresponsebody = await postresponse.json();
  33  |     console.log(postresponsebody);
  34  | 
  35  | 
  36  |     expect(postresponse.status()).toBe(200);
  37  |     expect(postresponsebody.message).toBe("User created!");
  38  |     expect(postresponsebody.responseCode).toBe(201);
  39  | 
  40  | 
  41  |     const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
  42  |         form: {
  43  |             name: faker.person.firstName(),
  44  |             email: email,
  45  |             password: password,
  46  |             title: "Mr",
  47  |             birth_date: "10",
  48  |             birth_month: "May",
  49  |             birth_year: "1990",
  50  |             firstname: faker.person.firstName(),
  51  |             lastname: faker.person.lastName(),
  52  |             company: faker.company.name(),
  53  |             address1: faker.location.streetAddress(),
  54  |             address2: faker.location.secondaryAddress(),
  55  |             country: "India",
  56  |             zipcode: faker.location.zipCode(),
  57  |             state: faker.location.state(),
  58  |             city: faker.location.city(),
  59  |             mobile_number: faker.string.numeric('+254 ### ### ###')
  60  |         }
  61  |     })
  62  |     const putresponsebody = await putresponse.json();
  63  |     console.log(putresponsebody);
  64  | 
  65  |     expect(putresponse.status()).toBe(200);
  66  |     expect(putresponsebody.message).toBe("User updated!");
  67  |     expect(putresponsebody.responseCode).toBe(200);
  68  | 
  69  |     const loginpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  70  |         data: {
  71  |             email: email,
  72  |             password: password
  73  |         }
  74  |     })
  75  |     const loginpostresponsebody = await loginpostresponse.json();
  76  |     console.log(loginpostresponsebody);
  77  | 
  78  |     expect(loginpostresponse.status()).toBe(200);
> 79  |     expect(loginpostresponsebody.message).toBe("User exists!");
      |                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  80  |     expect(loginpostresponsebody.responseCode).toBe(200);
  81  | 
  82  | 
  83  |     const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  84  |         data: {
  85  |             email: email,
  86  |             password: faker.internet.password()
  87  |         }
  88  |     })
  89  |     const invalidpostresponsebody = await invalidpostresponse.json();
  90  |     console.log(invalidpostresponsebody);
  91  | 
  92  |     expect(invalidpostresponse.status()).toBe(200);
  93  |     expect(invalidpostresponsebody.message).toBe("User not found!");
  94  |     expect(invalidpostresponsebody.responseCode).toBe(404);
  95  | 
  96  | 
  97  |     const emptyemailpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  98  |         data: {
  99  |             password: password
  100 |         }
  101 |     })
  102 |     const emptyemailpostresponsebody = await emptyemailpostresponse.json();
  103 |     console.log(emptyemailpostresponsebody);
  104 | 
  105 |     expect(emptyemailpostresponse.status()).toBe(200);
  106 |     expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
  107 |     expect(emptyemailpostresponsebody.responseCode).toBe(400);
  108 | 
  109 | 
  110 |     const deleteresponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
  111 |         form: {
  112 |             email: email,
  113 |             password: password
  114 |         }
  115 |     })
  116 |     const deleteresponsebody = await deleteresponse.json();
  117 |     console.log(deleteresponsebody);
  118 | 
  119 |     expect(deleteresponse.status()).toBe(200);
  120 |     expect(deleteresponsebody.message).toBe("Account deleted!");
  121 |     expect(deleteresponsebody.responseCode).toBe(200);
  122 | })
```