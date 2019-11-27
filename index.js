const {Builder} = require('selenium-webdriver');
const {signUp, login} = require('./scenarios/users');
const {items} = require('./scenarios/items');
const chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder(require('chromedriver').path).build());

const test = async () => {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await signUp(driver)
        await login(driver)
        await items(driver)
    } catch (e) {
        console.error('Error: ', e)
    }
};


test();