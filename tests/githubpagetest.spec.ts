import { test, expect } from '@playwright/test';

test('launch github', async ({ page }) => {
  await page.goto('https://github.com/')
  await page.screenshot({ path: `githomepage.png` })
  //locator using class name
  await page.locator('.HeaderMenu-link--sign-in').click()
  await page.screenshot({ path: `gitsignin.png` })
  await expect(page).toHaveURL('https://github.com/login')
  //locator using ID-Fill user Id
  await page.locator('id=login_field').fill('swapna')
  //locator using CSS Selector- fillpassword 
   await page.locator('css= #password').fill('abcdf')
   //locator using xpath -click signin
  await page.locator('xpath= //*[@id="login"]/div[4]/form/div/input[13]').click()
  //await expect(page).toHaveURL('https://github.com/session')

  //await page.locator('text='Create an account'').click

  
  await new Promise(() => {});
  
});

