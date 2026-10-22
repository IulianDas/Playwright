import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";


test('TASK1 logs in and navigates to the home page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await expect(page).toHaveURL(/auth\/login/);

    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
    await expect(page).toHaveURL(/account/);

    await homePage.goto();
    await expect(page).toHaveURL(`/ `);
    
});

test('TASK2 adds 2 items to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login('customer2@practicesoftwaretesting.com', 'welcome01');
    await expect(page).toHaveURL(/account/);

    await homePage.goto();
    await homePage.choseSortOption();

    await homePage.addItemToCart('Combination Pliers');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('1');
    await homePage.goto();

    await homePage.addItemToCart('Bolt Cutters');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('2');
    
});

test('TASK3 removes item from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
    await expect(page).toHaveURL(/account/);

    await homePage.goto();
    await homePage.choseSortOption();
    await homePage.addItemToCart('Combination Pliers');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('1');
    await homePage.goto();
    await homePage.addItemToCart('Pliers');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('2');

    await homePage.removeItemFromCart('Pliers');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('1');
});