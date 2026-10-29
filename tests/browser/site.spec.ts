import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('English-only entry, refresh, and no language selector', async ({ page }) => {
  await page.goto('/'); await expect(page).toHaveURL(/\/en\/$/);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('a[href^="/zh/"]')).toHaveCount(0);
  const response = await page.goto('/zh/');
  expect(response?.status()).toBe(404);
});
test('Dark overrides OS light and explicit theme persists across reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/en/#work');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch color theme' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload(); await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Switch color theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
test('Mobile layout, keyboard navigation, fonts, and accessibility in both themes', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('/en/');
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect(await page.locator('h1').evaluate(el => getComputedStyle(el).fontStyle)).toBe('normal');
  expect(await page.evaluate(() => document.fonts.check('16px Newsreader') && document.fonts.check('16px Manrope'))).toBe(true);
  await page.locator('nav a[href="#contact"]').focus(); await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#contact$/);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
  await page.getByRole('button', { name: 'Switch color theme' }).click();
  const darkResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(darkResults.violations).toEqual([]);
});
if (process.env.NEXT_PUBLIC_DEMO_CONTENT === 'true') {
  test('Fictional preview has no education dates and work filters update cards', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.getByRole('complementary', { name: 'Fictional design preview' })).toContainText('fictional');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    await expect(page.locator('#education .date')).toHaveCount(0);
    await expect(page.locator('#education')).not.toContainText('2022');
    await expect(page.locator('#experience')).toContainText('2024 — 2026');
    await expect(page.locator('.work-card')).toHaveCount(4);
    await page.getByRole('button', { name: 'Quantum Computing', exact: true }).click();
    await expect(page.locator('.work-card')).toHaveCount(1);
    await expect(page.locator('.work-card')).toContainText('Variational Quantum Notebook');
    await page.getByRole('button', { name: 'All work', exact: true }).click();
    await expect(page.locator('.work-card')).toHaveCount(4);
  });
}
