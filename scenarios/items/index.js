const {Builder, By, Key, until} = require('selenium-webdriver');
const {URL, mockNewUser, mockNewItem} = require('./__mock__');
const {sleep} = require('../../common/utils');
const {login} = require('../users/login');
const {searchItem} = require('./seachItems');
const {addItem} = require('./addItem');
const {deleteItem} = require('./deleteItem');

async function items(driver) {
    try {
        // Loading home page
        await login(driver);
        // Add Item
        sleep(500);
        console.info('1. Click add item button: ', await driver.getCurrentUrl());
        await driver.findElement(By.id('AddItem')).click();
        sleep(1000);
        console.info('2. Current url: ', await driver.getCurrentUrl());
        console.info('3. Set item information', await driver.getCurrentUrl());
        await addItem(driver);
        sleep(2000);

        console.info('4. Search an new item', await driver.getCurrentUrl());
        await searchItem(driver);
        sleep(500);

        console.info('5. Delete an new item', await driver.getCurrentUrl());
        await deleteItem(driver);
        sleep(5000);

    } finally {
        await driver.quit();
    }
}

module.exports = {
    items
};