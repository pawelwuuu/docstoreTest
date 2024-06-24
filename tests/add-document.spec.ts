import { test, expect } from '@playwright/test';
import path from 'node:path';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('banner').getByRole('link', { name: 'Zaloguj się' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('test');
  await page.getByLabel('Hasło:').click();
  await page.getByLabel('Hasło:').fill('test');
  await page.getByRole('button', { name: 'Zaloguj' }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Dodaj dokument' }).click();
  await page.getByLabel('Tytuł:').click();
  await page.getByLabel('Tytuł:').fill('test');
  await page.getByLabel('Opis:').click();
  await page.getByLabel('Opis:').fill('test');
  await page.getByLabel('Autor:').click();
  await page.getByLabel('Autor:').fill('test');
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByText('Plik:').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join(__dirname, '..', 'files', 'a.pdf'));
  await page.getByLabel('science fiction').check();
  await page.getByLabel('fantasy').check();
  await page.getByRole('button', { name: 'Dodaj Dokument' }).click();
  await expect(page.getByRole('paragraph')).toContainText('Dokument został dodany.');
  await page.getByRole('link', { name: 'Strona główna' }).click();
});