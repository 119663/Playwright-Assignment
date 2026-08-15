# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/products.spec.ts >> Product tests
- Location: tests/api/products.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 405
Received: 200
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Product tests", async ({ request }) => {
  4  |     const getresponse = await request.get('https://automationexercise.com/api/productsList', {
  5  |     headers: {
  6  |         'Content-Type': 'application/json',
  7  |     }
  8  |     })
  9  |     const data = await getresponse.json();
  10 |     console.log(data);
  11 | 
  12 |     expect(data.responseCode).toBe(200);
  13 |     expect(Array.isArray(data.products)).toBe(true);
  14 | 
  15 |     
  16 |     const searchresponse = await request.post('https://automationexercise.com/api/searchProduct', {
  17 |         data:{
  18 |             name: "Top",
  19 |         }
  20 |     })
  21 |     const responsebody = await searchresponse.json();
  22 |     console.log(responsebody);
  23 | 
  24 |     expect(searchresponse.status()).toBe(200);
  25 | 
  26 |     
  27 |     const postresponse = await request.post('https://automationexercise.com/api/productsList', {
  28 |         data:{
  29 |             name: "Sundress for Women",
  30 |             price: "Rs. 2000",
  31 |             brand: "Madame"
  32 |         }
  33 |     })
  34 |     const postresponsebody = await postresponse.json();
  35 |     console.log(postresponsebody);
  36 | 
> 37 |     expect(postresponse.status()).toBe(405);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  38 |     expect(postresponsebody.message).toBe("This request method is not supported.");
  39 | })
```