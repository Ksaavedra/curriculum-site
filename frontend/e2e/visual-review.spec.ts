/**
 * Gera PNGs para anexar ao PR (antes/depois ou só “depois”).
 * Não faz parte do smoke — executar: `npm run screenshots:pr`
 * Saída: `e2e-output/pr-visual/` (gitignored).
 */
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

import { test, type Page } from '@playwright/test';

const OUT_DIR = join(process.cwd(), 'e2e-output', 'pr-visual');

/** Rotas alinhadas a `internal-routes.ts` / `app.routes.ts`. */
const PAGES: { slug: string; path: string }[] = [
  { slug: 'home', path: '/' },
  { slug: 'sobre', path: '/sobre' },
  { slug: 'experiencia', path: '/experiencia' },
  { slug: 'formacao', path: '/formacao' },
  { slug: 'habilidades', path: '/habilidades' },
  { slug: 'projetos', path: '/projetos' },
  { slug: 'contato', path: '/contato' },
];

async function shellReady(page: Page): Promise<void> {
  await page.locator('main').waitFor({ state: 'visible', timeout: 30_000 });
}

test.describe('Revisão visual (capturas para PR)', () => {
  test.beforeAll(async () => {
    await mkdir(OUT_DIR, { recursive: true });
  });

  for (const { slug, path } of PAGES) {
    test(`desktop — ${slug}`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await shellReady(page);
      await page.screenshot({
        path: join(OUT_DIR, `${slug}-desktop.png`),
        fullPage: true,
      });
    });

    test(`mobile — ${slug}`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      await shellReady(page);
      await page.screenshot({
        path: join(OUT_DIR, `${slug}-mobile.png`),
        fullPage: true,
      });
    });
  }
});
