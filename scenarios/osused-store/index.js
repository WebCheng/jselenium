const {Builder, By, Key, until} = require('selenium-webdriver');

const BASE_URL = 'http://localhost'
const BASE_PORT = '3000'
const URL = `${BASE_URL}:${BASE_PORT}`

async function testOsusedStore() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    // Loading home page
    await driver.get(URL);
    console.info('1. loaded url: ', await driver.getCurrentUrl())
    const loginLinkButton = await driver.findElement(By.xpath('//span[text()=\'Login\']'));
    loginLinkButton.click()

    // LOGIN
    console.info('2. login clicked')
    driver.wait(until.urlIs(`${URL}/login`));
    console.info('3. current url: ', await driver.getCurrentUrl())
    const emailInput = await driver.findElement(By.id('email'))
    console.info('4. got email input')
    emailInput.sendKeys('qwe@qwe.com') // todo: extract this hardcoded value, then make a mock data, then signup with it before login
    const passwordInput = await driver.findElement(By.id('password'))
    console.info('5. got password input')
    passwordInput.sendKeys('qweqweqwe') // todo: extract this hardcoded value, then make a mock data, then signup with it before login
    const loginButton = await driver.findElement(By.xpath('//button[@type=\'submit\']'))
    console.info('6. got login button')
    loginButton.click()
    console.info('7. clicked login button')
    driver.wait(until.urlIs(`${URL}/items`));
    console.info('8. current url: ', await driver.getCurrentUrl())

    //TODO: SIGN UP:

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