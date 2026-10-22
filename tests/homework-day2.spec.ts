import { test, expect } from '@playwright/test';

test('TASK1 Search for pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByLabel('Search').dblclick();
  await page.getByPlaceholder('Search').fill('pliers');
  await expect(page.getByPlaceholder('Search')).toHaveValue('pliers');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('h5.card-title', { hasText: /pliers/i })).toHaveCount(4);
});


test('TASK2 Filter the catalog to hammers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByRole('checkbox', { name: 'Hammer' }).check();
  await expect(page.getByRole('checkbox', { name: 'Hammer' })).toBeChecked();
  await expect(page.locator('h5.card-title', { hasText: /Hammer/i })).toHaveCount(7);
  await page.getByRole('checkbox', { name: 'Hammer' }).uncheck();
  await expect(page.getByRole('checkbox', { name: 'Hammer' })).not.toBeChecked();
});

test('TASK3 Sort the products by name', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByLabel('Sort').selectOption('name,asc');
  await expect(page.getByTitle('Compare')).toHaveCount(9);
  await expect(page.locator('h5.card-title').first()).toHaveText('Adjustable Wrench');
  await expect(page.locator('h5.card-title').first()).toHaveClass('card-title');
});

test('TASK4 Inspect a product and add two items to the cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByText('Combination Pliers').click();
  await expect(page.locator('h1', { hasText: 'Combination Pliers' })).toBeVisible();
  await expect(page.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue('1');
  await page.getByRole('button', { name: 'increase quantity' }).click();
  await expect(page.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue('2');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByRole('alert', { name: 'Product added to shopping' })).toHaveText(' Product added to shopping cart. ');
  await expect(page.getByRole('link', { name: /cart/i })).toContainText('2');
});