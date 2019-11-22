const {Builder, By, Key, until} = require('selenium-webdriver');
const { URL, mockNewUser } = require('./__mock__')

async function testOsusedStore() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    // Loading home page
    await driver.get(URL);
    console.info('loaded url: ', await driver.getCurrentUrl())
    
    //TODO: SIGN UP:
    await driver.findElement(By.xpath('//span[text()=\'Login\']')).click()
    console.info('1. login clicked')
    await driver.wait(until.urlIs(`${URL}/login`));
    console.info('2. current url: ', await driver.getCurrentUrl())
    await driver.findElement(By.xpath('//a[@href=\'/sign-up\']')).click()
    console.info('3. sign up clicked')
    await driver.wait(until.urlIs(`${URL}/sign-up`));
    console.info('4. current url: ', await driver.getCurrentUrl())

    await driver.findElement(By.id('firstName')).sendKeys(mockNewUser.firstName)
    await driver.findElement(By.id('lastName')).sendKeys(mockNewUser.lastName)
    await driver.findElement(By.id('email')).sendKeys(mockNewUser.email)
    await driver.findElement(By.id('password')).sendKeys(mockNewUser.password)
    await driver.findElement(By.id('Checkpassword')).sendKeys(mockNewUser.password)
    console.info('5. set user')

    await driver.findElement(By.xpath('//button[@type=\'submit\']')).click()
    console.info('6. clicked sign up')

    //TODO: fix alert acceptance
    await driver.switchTo().alert().accept();
    console.info('7. clicked alert')

    await driver.wait(until.urlIs(`${URL}/items`));
    console.info('8. current url: ', await driver.getCurrentUrl())


    // LOGIN
    // console.info('2. login clicked')
    // driver.wait(until.urlIs(`${URL}/login`));
    // console.info('3. current url: ', await driver.getCurrentUrl())
    // const emailInput = await driver.findElement(By.id('email'))
    // console.info('4. got email input')
    // emailInput.sendKeys('qwe@qwe.com') // todo: extract this hardcoded value, then make a mock data, then signup with it before login
    // const passwordInput = await driver.findElement(By.id('password'))
    // console.info('5. got password input')
    // passwordInput.sendKeys('qweqweqwe') // todo: extract this hardcoded value, then make a mock data, then signup with it before login
    // const loginButton = await driver.findElement(By.xpath('//button[@type=\'submit\']'))
    // console.info('6. got login button')
    // loginButton.click()
    // console.info('7. clicked login button')
    // driver.wait(until.urlIs(`${URL}/items`));
    // console.info('8. current url: ', await driver.getCurrentUrl())


    //TODO: ADD: add an item -> check if the item is in the list

    //TODO: DELETE: delete an item -> check if the item is deleted in the list

    //TODO: SEARCH: 1. by category 2. by a keyword

    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
}

module.exports = {
  testOsusedStore
};