# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/products.spec.ts >> Product tests
- Location: tests/api/products.spec.ts:3:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Product tests", async ({ request }) => {
  4  |     //get products
  5  |     const getresponse = await request.get('https://automationexercise.com/api/productsList', {
  6  |         headers: {
  7  |             'Content-Type': 'application/json',
  8  |         }
  9  |     })
> 10 |     const data = await getresponse.json();
     |                  ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  11 |     console.log(data);
  12 | 
  13 |     expect(data.responseCode).toBe(200);
  14 |     expect(getresponse.status()).toBe(200);
  15 |     expect(Array.isArray(data.products)).toBe(true);
  16 |     expect(data.products[0].id).toBe(1);
  17 | 
  18 |     for (const product of data.products) {
  19 |         expect(product.id).toBeDefined();
  20 |         expect(product.id).not.toBeNull();
  21 |         expect(typeof product.id).toBe('number');
  22 |         expect(product.id).toBeGreaterThan(0);
  23 |         expect(product.name).toBeDefined();
  24 |         expect(product.name).not.toBeNull();
  25 |         expect(typeof product.name).toBe('string');
  26 |         expect(product.price).toBeDefined();
  27 |         expect(product.brand).toBeDefined();
  28 |     }
  29 | 
  30 |     //search product
  31 |     const searchresponse = await request.post('https://automationexercise.com/api/searchProduct', {
  32 |         form: {
  33 |             search_product: 'Top',
  34 |         }
  35 |     })
  36 |     const responsebody = await searchresponse.json();
  37 |     console.log(responsebody);
  38 |     expect(responsebody.responseCode).toBe(200);
  39 |     expect(Array.isArray(responsebody.products)).toBe(true);
  40 |     expect(searchresponse.status()).toBe(200);
  41 | 
  42 |     //post product
  43 |     const postresponse = await request.post('https://automationexercise.com/api/productsList', {
  44 |         form: {
  45 |             name: "Sundress for Women",
  46 |             price: "Rs. 2000",
  47 |             brand: "Madame"
  48 |         }
  49 |     })
  50 |     const postresponsebody = await postresponse.json();
  51 |     console.log(postresponsebody);
  52 | 
  53 |     expect(postresponse.status()).toBe(200);
  54 |     expect(postresponsebody.message).toBe("This request method is not supported.");
  55 |     expect(postresponsebody.responseCode).toBe(405);
  56 | })
```