import { test, expect } from '@playwright/test';

test("Product tests", async ({ request }) => {
    const getresponse = await request.get('https://automationexercise.com/api/productsList', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await getresponse.json();
    console.log(data);

    expect(data.responseCode).toBe(200);
    expect(getresponse.status()).toBe(200);
    expect(Array.isArray(data.products)).toBe(true);
    expect(data.products[0].id).toBe(1);

    for (const product of data.products) {
        expect(product.id).toBeDefined();
        expect(product.id).not.toBeNull();
        expect(typeof product.id).toBe('number');
        expect(product.id).toBeGreaterThan(0);
        expect(product.name).toBeDefined();
        expect(product.name).not.toBeNull();
        expect(typeof product.name).toBe('string');
        expect(product.price).toBeDefined();
        expect(product.brand).toBeDefined();
    }


    const searchresponse = await request.post('https://automationexercise.com/api/searchProduct', {
        form: {
            search_product: 'Top',
        }
    })
    const responsebody = await searchresponse.json();
    console.log(responsebody);
    expect(responsebody.responseCode).toBe(200);
    expect(Array.isArray(responsebody.products)).toBe(true);
    expect(searchresponse.status()).toBe(200);


    const postresponse = await request.post('https://automationexercise.com/api/productsList', {
        form: {
            name: "Sundress for Women",
            price: "Rs. 2000",
            brand: "Madame"
        }
    })
    const postresponsebody = await postresponse.json();
    console.log(postresponsebody);

    expect(postresponse.status()).toBe(200);
    expect(postresponsebody.message).toBe("This request method is not supported.");
    expect(postresponsebody.responseCode).toBe(405);
})