import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";


type Fixtures = { loggedInPage: LoginPage };

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      "customer@practicesoftwaretesting.com",
      "welcome01",
    );
    await use(loginPage);

    await loginPage.clearFields();
  },
});
export { expect } from '@playwright/test';