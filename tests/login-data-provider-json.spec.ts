import test, { expect } from "@playwright/test";
import credentials  from "../test-data/login.json"
import { LoginPage } from "../pages/LoginPage";

const { email, password } = credentials as { email: string; password: string };

test('TASK1 login with JSON to the home page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(page).toHaveURL(/auth\/login/);

   
    await loginPage.login(email, password);
    await expect(page).toHaveURL(/account/);


    
});