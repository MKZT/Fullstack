import { test, expect } from '@playwright/test';

test.describe('Next.Taxi E2E', () => {
  // Тест 1: Головна сторінка
  test('перевірка заголовка головної', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Next.Taxi/i); 
  });

  // Тест 2: Навігація
  test('перехід до статей', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=СТАТТІ'); 
    await expect(page).toHaveURL(/.*articles/);
  });

  // Тест 3: Форма входу
  test('наявність форми входу', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/signin');
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });
});