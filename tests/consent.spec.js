import { test, expect } from '@playwright/test';

test.describe('Cookie Consent', () => {
  test.beforeEach(async ({ context }) => {
    await context.clearCookies();
    await context.addInitScript(() => {
      localStorage.clear();
    });
  });

  test('should display cookie consent banner', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(1500);

    const consentBanner = page.locator('#cookie-consent');
    await expect(consentBanner).toBeVisible({ timeout: 3000 });
  });

  test('should hide banner after accepting cookies', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(1500);

    const acceptButton = page.locator('#accept-cookies');
    await acceptButton.click();

    const consentBanner = page.locator('#cookie-consent');
    await expect(consentBanner).not.toBeVisible();

    const consentValue = await page.evaluate(() => localStorage.getItem('cookie-consent'));
    expect(consentValue).toBe('accepted');
  });

  test('should hide banner after rejecting cookies', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(1500);

    const rejectButton = page.locator('#reject-cookies');
    await rejectButton.click();

    const consentBanner = page.locator('#cookie-consent');
    await expect(consentBanner).not.toBeVisible();

    const consentValue = await page.evaluate(() => localStorage.getItem('cookie-consent'));
    expect(consentValue).toBe('rejected');
  });

  test('should open preferences modal', async ({ page }) => {
    await page.goto('/');

    await page.waitForTimeout(1500);

    const preferencesButton = page.locator('#cookie-preferences');
    await preferencesButton.click();

    const modal = page.locator('#cookie-preferences-modal');
    await expect(modal).toBeVisible();
  });
});
