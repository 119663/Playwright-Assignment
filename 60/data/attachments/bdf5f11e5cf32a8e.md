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

Expected: "Searched products list"
Received: undefined
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
  13 |     expect(getresponse.status()).toBe(200);
  14 |     expect(Array.isArray(data.products)).toBe(true);
  15 | 
  16 |     
  17 |     const searchresponse = await request.post('https://automationexercise.com/api/searchProduct', {
  18 |         form:{
  19 |             search_product: 'Top',
  20 |         }
  21 |     })
  22 |     const responsebody = await searchresponse.json();
  23 |     console.log(responsebody);
  24 | 
  25 |     expect(searchresponse.status()).toBe(200);
> 26 |     expect(responsebody.message).toBe("Searched products list");
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  27 | 
  28 |     
  29 |     const postresponse = await request.post('https://automationexercise.com/api/productsList', {
  30 |         form:{
  31 |             name: "Sundress for Women",
  32 |             price: "Rs. 2000",
  33 |             brand: "Madame"
  34 |         }
  35 |     })
  36 |     const postresponsebody = await postresponse.json();
  37 |     console.log(postresponsebody);
  38 | 
  39 |     expect(postresponse.status()).toBe(200);
  40 |     expect(postresponsebody.message).toBe("This request method is not supported.");
  41 |     expect(postresponsebody.responseCode).toBe(405);
  42 | })
```