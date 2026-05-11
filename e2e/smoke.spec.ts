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

  test('mobile: navbar collapse, aria-expanded e navegação', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuToggle = page.getByRole('button', { name: 'Abrir ou fechar menu de navegação' });
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');

    await menuToggle.click();
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

    await page.getByRole('link', { name: 'Contato', exact: true }).click();
    await expect(page).toHaveURL(/\/contato$/);
    await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  });
});
