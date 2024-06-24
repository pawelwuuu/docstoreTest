import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('banner').getByRole('link', { name: 'Zaloguj się' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('admin');
  await page.locator('#email').press('Tab');
  await page.getByLabel('Hasło:').fill('admin');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await expect(page.getByRole('banner')).toContainText('Panel administratora');
  await page.getByRole('link', { name: 'Panel administratora' }).click();
  await page.getByRole('link', { name: 'Zarządzaj Dokumentami' }).click();
  await page.getByText('ID: 1001 ID użytkownika: 999').click();
  await page.locator('div:nth-child(51) > a > button').click();
  await expect(page.locator('body')).toContainText('Dokument został usunięty.');
});