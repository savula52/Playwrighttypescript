import { test, expect } from '@playwright/test';

test('launch github', async ({ page }) => {
  await page.goto('https://github.com/')
  await page.screenshot({ path: `githomepage.png` })
  //locator using class name
  await page.locator('.HeaderMenu-link--sign-in').click()
  await page.screenshot({ path: `gitsignin.png` })
  await expect(page).toHaveURL('https://github.com/login')
  //locator using ID
  await page.locator('id=login_field').fill('swapna')
  //locator using xpath
  await page.locator('//*[@id="password"]').fill('testpassword')
  await page.locator('//*[@id="login"]/div[4]/form/div/input[13]').click()
  
  await new Promise(() => {});
  
});

