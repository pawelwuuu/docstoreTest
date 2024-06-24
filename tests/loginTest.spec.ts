import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('banner').getByRole('link', { name: 'Zaloguj się' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('admin');
  await page.locator('#email').press('Tab');
  await page.getByLabel('Hasło:').fill('admin');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await expect(page.getByRole('paragraph')).toContainText('Pomyślnie zalogowano');
});