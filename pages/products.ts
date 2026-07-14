import {Page} from '@playwright/test';

export default class ProductsPage {
    private page: Page;
    readonly productsButton
    readonly productList
    readonly searchInput
    readonly searchButton
    readonly viewProductButton
    readonly addToCartButton
    readonly viewProductAddToCart
    readonly deleteCartItemButton
    readonly checkoutButton
    readonly placeOrderButton
    readonly addquantityInput

    constructor(page: Page) {
        this.page = page;
        this.productsButton = page.locator('//a[@href="/products"]');
        this.productList = page.locator('//div[@class="features_items"]');
        this.searchInput = page.locator('//input[@id="search_product"]');
        this.searchButton = page.locator('//button[@id="submit_search"]');
        this.viewProductButton = page.locator('//a[@href="/product_details/1"]');
        this.addToCartButton = page.locator("(//a[@data-product-id='1' and contains(@class,'add-to-cart')])[1]");
        this.viewProductAddToCart = page.locator("//button[normalize-space(.)='Add to cart']");
        this.checkoutButton = page.locator('//a[@class="btn btn-default check_out"]');
        this.deleteCartItemButton = page.locator('//a[@class="cart_quantity_delete"]');
        this.placeOrderButton = page.locator('//a[@class="btn btn-default check_out"]');
        this.addquantityInput = page.locator('//input[@id="quantity"]');
    }
    
    async navigate() {
        await this.page.goto('https://www.automationexercise.com');
    }
}