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

   //locator using text - Click create new account
  await page.locator('text=Create an account').click()
  await expect(page).toHaveURL('https://github.com/signup?return_to=https%3A%2F%2Fgithub.com%2Flogin&source=login')
  //await.page.locator('css=#login > div.login-callout.mt-3 > p > a').click()
   await page.screenshot({ path: `gcreateaccount.png` })
  
  //await new Promise(() => {})
  
});

