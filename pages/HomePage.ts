import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly cartBadge: Locator;
    readonly filter: Locator;
    readonly product: Locator;
    readonly addToCartButton: Locator;
    readonly cart: Locator;
    readonly removeFromCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.getByRole('link', { name: /cart/i });
        this.filter = page.getByRole('checkbox', { name: 'Pliers' });
        this.product = page.getByRole('link');
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
        this.cart = page.getByRole('link', { name: /cart/i });
        this.removeFromCartButton = page.getByRole('row', { name: /^Pliers\b/ }).locator('.btn-danger');
    }

    goto() {
        return this.page.goto('https://practicesoftwaretesting.com/');
    }

   async choseSortOption() {
        await this.filter.click();
       
    }

    async addItemToCart(productName: string) {
       await this.product.getByText(productName, { exact: true }).click();
        await this.addToCartButton.click();
    }

    async removeItemFromCart(productName: string) {
        await this.cart.click();
        await this.removeFromCartButton.click();
    }
    
}



