import { test, expect } from '@playwright/test';

test.describe('Smoke — navegação principal', () => {
  test('home carrega, CTA Contato, volta pelo header Início', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Kelly');

    await page.getByRole('link', { name: 'Entrar em contato' }).click();
    await expect(page).toHaveURL(/\/contato$/);
    await expect(page.getByRole('heading', { name: 'Contato' })).toBeVisible();

    await page.getByRole('link', { name: 'Início' }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test('CTA Ver experiência e link Experiência no header', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Ver experiência' }).click();
    await expect(page).toHaveURL(/\/experiencia$/);
    await expect(page.getByRole('heading', { name: 'Experiência' })).toBeVisible();

    await page.getByRole('link', { name: 'Currículo' }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});
