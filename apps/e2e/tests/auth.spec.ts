import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/study/i);
});

test('unauthenticated user redirected to login', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page).toHaveURL(/login|signin/);
});
