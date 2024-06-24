import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('banner').getByRole('link', { name: 'Zaloguj się' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('test');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('test');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await expect(page.getByRole('paragraph')).toContainText('Pomyślnie zalogowano');
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('link', { name: 'Wyloguj' }).click();
  await expect(page.getByRole('banner')).toContainText('Zaloguj się');
});