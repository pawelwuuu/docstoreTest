import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('banner').getByRole('link', { name: 'Zaloguj się' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('test');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('test');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByLabel('Autor').click();
  await page.getByLabel('Autor').fill('test');
  await page.getByRole('button', { name: 'Filtruj' }).click();
  await page.getByRole('button', { name: 'Więcej' }).nth(1).click();
  await page.getByLabel('Treść').click();
  await page.getByLabel('Treść').fill('komentarz');
  await page.getByLabel('Treść').press('ControlOrMeta+a');
  await page.getByLabel('Treść').fill('');
  await page.getByRole('button', { name: 'Dodaj komentarz' }).click();
  await page.getByLabel('Treść').fill(' ');
  await page.getByLabel('Treść').click();
  await page.getByLabel('Treść').click();
  await page.getByLabel('Treść').fill(' komentzrz');
  await page.getByRole('button', { name: 'Dodaj komentarz' }).click();
  await expect(page.locator('#popupContainer')).toContainText('Komentarz został dodany.');
});