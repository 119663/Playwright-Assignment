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

Expected: "User Detail"
Received: "Bad request, email parameter is missing in GET request."
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
  9   |     //POST To Create/Register User Account
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
  41  |     //PUT METHOD To Update User Account
  42  |     const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
  43  |         form: {
  44  |             name: faker.person.firstName(),
  45  |             email: email,
  46  |             password: password,
  47  |             title: "Mr",
  48  |             birth_date: "10",
  49  |             birth_month: "May",
  50  |             birth_year: "1990",
  51  |             firstname: faker.person.firstName(),
  52  |             lastname: faker.person.lastName(),
  53  |             company: faker.company.name(),
  54  |             address1: faker.location.streetAddress(),
  55  |             address2: faker.location.secondaryAddress(),
  56  |             country: "India",
  57  |             zipcode: faker.location.zipCode(),
  58  |             state: faker.location.state(),
  59  |             city: faker.location.city(),
  60  |             mobile_number: faker.string.numeric('+254 ### ### ###')
  61  |         }
  62  |     })
  63  |     const putresponsebody = await putresponse.json();
  64  |     console.log(putresponsebody);
  65  | 
  66  |     expect(putresponse.status()).toBe(200);
  67  |     expect(putresponsebody.message).toBe("User updated!");
  68  |     expect(putresponsebody.responseCode).toBe(200);
  69  | 
  70  |     
  71  |     //GET user account detail by email
  72  |     const getuserbyemail = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
  73  |         form: {
  74  |             email: "xibanot768@matkind.com"
  75  |         }
  76  |     })
  77  |     const getuserbyemailbody = await getuserbyemail.json();
  78  |     console.log(getuserbyemailbody);
  79  |     expect(getuserbyemail.status()).toBe(200);
> 80  |     expect(getuserbyemailbody.message).toBe("User Detail");
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  81  |     expect(getuserbyemailbody.responseCode).toBe(200);
  82  | 
  83  | 
  84  |     //POST To Verify Login with valid details
  85  |     const loginpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  86  |         form: {
  87  |             email: email,
  88  |             password: password
  89  |         }
  90  |     })
  91  |     const loginpostresponsebody = await loginpostresponse.json();
  92  |     console.log(loginpostresponsebody);
  93  | 
  94  |     expect(loginpostresponse.status()).toBe(200);
  95  |     expect(loginpostresponsebody.message).toBe("User exists!");
  96  |     expect(loginpostresponsebody.responseCode).toBe(200);
  97  | 
  98  | 
  99  |     //POST To Verify Login with invalid details
  100 |     const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  101 |         form: {
  102 |             email: email,
  103 |             password: faker.internet.password()
  104 |         }
  105 |     })
  106 |     const invalidpostresponsebody = await invalidpostresponse.json();
  107 |     console.log(invalidpostresponsebody);
  108 | 
  109 |     expect(invalidpostresponse.status()).toBe(200);
  110 |     expect(invalidpostresponsebody.message).toBe("User not found!");
  111 |     expect(invalidpostresponsebody.responseCode).toBe(404);
  112 | 
  113 | 
  114 |     //POST To Verify Login without email parameter
  115 |     const emptyemailpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  116 |         form: {
  117 |             password: password
  118 |         }
  119 |     })
  120 |     const emptyemailpostresponsebody = await emptyemailpostresponse.json();
  121 |     console.log(emptyemailpostresponsebody);
  122 | 
  123 |     expect(emptyemailpostresponse.status()).toBe(200);
  124 |     expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
  125 |     expect(emptyemailpostresponsebody.responseCode).toBe(400);
  126 | 
  127 | 
  128 |     //DELETE METHOD To Delete User Account
  129 |     const deleteresponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
  130 |         form: {
  131 |             email: email,
  132 |             password: password
  133 |         }
  134 |     })
  135 |     const deleteresponsebody = await deleteresponse.json();
  136 |     console.log(deleteresponsebody);
  137 | 
  138 |     expect(deleteresponse.status()).toBe(200);
  139 |     expect(deleteresponsebody.message).toBe("Account deleted!");
  140 |     expect(deleteresponsebody.responseCode).toBe(200);
  141 | })
```