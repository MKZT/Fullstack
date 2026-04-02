import { test, expect } from '@playwright/test';

test.describe('E2E Тести системи Next.Taxi', () => {

  test('1. Головна сторінка завантажується коректно', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Next.Taxi/i); 
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('2. Навігація до списку статей працює', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=СТАТТІ'); 
    await expect(page).toHaveURL(/.*articles/);
  });

  test('3. Сторінка входу має активні поля введення', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/signin');
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
  });

});