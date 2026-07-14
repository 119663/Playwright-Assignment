import {test, expect} from '@playwright/test';
import ProductsPage from '../../pages/products';

test ("Navigate to products page", async ({page}) => {
    const products = new ProductsPage(page);
    await products.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await products.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
})

test ("Search for a product", async ({page}) => {
    const search = new ProductsPage(page);
    await search.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await search.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    await search.searchInput.fill('Top');
    await search.searchButton.click();
    await expect(page.locator('//h2[@class="title text-center"]')).toHaveText('Searched Products');
})

test ("View product details", async ({page}) => {
    const viewProduct = new ProductsPage(page);
    await viewProduct.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await viewProduct.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    await viewProduct.viewProductButton.click();
    await expect(page).toHaveTitle('Automation Exercise - Product Details');
})

test ("Add to cart from product details page", async ({page}) => {
    test.setTimeout(80000);
    const viewProductAddToCart = new ProductsPage(page);
    await viewProductAddToCart.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await viewProductAddToCart.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    await viewProductAddToCart.viewProductButton.click();
    await expect(page).toHaveTitle('Automation Exercise - Product Details');
    await viewProductAddToCart.viewProductAddToCart.click();
})


test ("Add to cart from products page", async ({page}) => {
    test.setTimeout(80000);
    const addToCart = new ProductsPage(page);
    await addToCart.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await addToCart.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    await addToCart.viewProductAddToCart.click();
})

test ("Add a product to cart and checkout", async ({page}) => {
    test.setTimeout(80000);
    const products = new ProductsPage(page);
    await products.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await products.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    await products.addToCartButton.click();
    await page.locator("//div[contains(@class,'modal-content')]//a[@href='/view_cart']").click();
    await expect(page).toHaveTitle('Automation Exercise - Checkout');
    await products.checkoutButton.click();
    await expect(page).toHaveTitle('Automation Exercise - Checkout');
    await products.placeOrderButton.click();

})

test ("Delete a product from cart", async ({page}) => {
    const products = new ProductsPage(page);
    await products.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await products.productsButton.click();
    await products.addToCartButton.click();
    await page.locator("//div[contains(@class,'modal-content')]//a[@href='/view_cart']").click();
    await expect(page).toHaveTitle('Automation Exercise - Checkout');
    await products.deleteCartItemButton.click();
    await expect(page.locator("//b[text()='Cart is empty!']")).toBeVisible();
})

test("Increase product quantity in view products page", async ({page}) => {
    test.setTimeout(80000);
    const products = new ProductsPage(page);
    await products.navigate();
    await expect(page).toHaveTitle('Automation Exercise');
    await products.productsButton.click();
    await expect(page).toHaveTitle('Automation Exercise - All Products');
    await products.viewProductButton.click();
    await expect(page).toHaveTitle('Automation Exercise - Product Details');
    await products.addquantityInput.fill('2');
    await products.viewProductAddToCart.click();

})