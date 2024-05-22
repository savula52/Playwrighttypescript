import { test, expect } from '@playwright/test';

test('record steps in palywright', async ({ page }) => {
  await page.goto('https://www.plus.net/')
  await page.frameLocator('iframe[name="trustarc_cm"]').getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByRole('link', { name: 'Mobile', exact: true }).click();
 

  

})


