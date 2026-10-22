import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByPlaceholder('Your email');
        this.password = page.getByPlaceholder('Your password');
        this.submitButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid email or password');
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/login');
    }

    async login(userMail: string, userPassword: string) {
        await this.email.fill(userMail);
        await this.password.fill(userPassword);
        await this.submitButton.click();
    }

    async clearFields() {
        console.log(`Data is cleared`);
    }

}
