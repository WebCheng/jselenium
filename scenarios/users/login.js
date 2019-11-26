const {Builder, By, Key, until} = require('selenium-webdriver');
const { URL, mockNewUser } = require('./__mock__')

async function login() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    console.info('----------- LOGIN -----------')
    // Loading home page
    await driver.get(URL);
    console.info('loaded url: ', await driver.getCurrentUrl())

    await driver.findElement(By.xpath('//span[text()=\'Login\']')).click()
    console.info('1. login clicked')
    await driver.wait(until.urlIs(`${URL}/login`));
    console.info('2. current url: ', await driver.getCurrentUrl())

    await driver.findElement(By.id('email')).sendKeys(mockNewUser.email)
    await driver.findElement(By.id('password')).sendKeys(mockNewUser.password)
    console.info('3. set email/password')

    await driver.findElement(By.xpath('//button[@type=\'submit\']')).click()
    console.info('4. clicked login button')

    driver.wait(until.urlIs(`${URL}/items`));
    console.info('5. current url: ', await driver.getCurrentUrl())

    return driver
  } finally {
    await driver.quit();
  }
}

module.exports = {
  login
};