const {Builder, By, Key, until} = require('selenium-webdriver');
const { URL, mockNewUser } = require('./__mock__')
const { sleep } = require('../../common/utils')

async function signUp() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    console.info('----------- SIGN UP -----------')
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

    sleep(2000);
    await driver.switchTo().alert().accept();
    console.info('7. clicked alert')

    await driver.wait(until.urlIs(`${URL}/login`));
    console.info('8. current url: ', await driver.getCurrentUrl())
  } finally {
    await driver.quit();
  }
}

module.exports = {
  signUp
};