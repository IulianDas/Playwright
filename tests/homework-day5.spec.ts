
import { parse } from 'csv-parse/sync';
import{ test, expect } from "../Fixtures/fixtures";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import * as path from "path";
import * as fs from 'fs';

test( "TASK1 fixtures opens page and login", async ({ loggedInPage }) => {
  await  expect(loggedInPage.page.getByText("Jane Doe")).toBeVisible();
  await expect(loggedInPage.page).toHaveURL(/\/account/);
});

test.describe("TASK2 Catalog Hooks", () => {

test.beforeAll(async () => {
  const startTime = new Date();
  console.log(`Before all tests in TASK2 time ${startTime.toDateString()}`);
});

  test.beforeEach(async ({ loggedInPage }) => {
  await expect(loggedInPage.page).toHaveURL(/\/account/);
});

  test("TASK2 adds Combination Pliers to cart", async ({ page}) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.choseSortOption();
    await homePage.addItemToCart('Combination Pliers');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('1');
    await homePage.goto();
    await homePage.addItemToCart('Pliers');
    await expect(page.getByRole('link', { name: /cart/i })).toContainText('2');
    
  });

test.afterEach(async ({page}, testInfo) => {
   if(testInfo.status !== testInfo.expectedStatus){
    console.log(`Test failed`);
    await page.screenshot({fullPage: true});
   }
});

test.afterAll(async () => {
  console.log(` Test TASK2 finished `);
});

});

interface UserRegistrationtData{
  name: string;
  email:string;
  password: string;
  expectedResult: string;
}
const csvFilePath = path.resolve(__dirname, '../test-data/login-cases.csv');
const csvRecords = parse(fs.readFileSync(csvFilePath), { columns: true, skip_empty_lines: true, trim: true }) as UserRegistrationtData[];

for (const record of csvRecords) {
  test(`TASK3 Login with ${record.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(record.email, record.password);
    
    if(record.expectedResult === "/account/"){
      await expect(page).toHaveURL(/\/account\/?/);
    } else{
      await expect(page.getByText('Invalid email or password')).toBeVisible();
    }
});
}
