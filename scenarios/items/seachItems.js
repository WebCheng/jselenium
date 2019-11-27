const {By, until, Key} = require('selenium-webdriver');
const {sleep} = require('../../common/utils');
const {mockNewItem} = require('./__mock__');

async function searchItem(driver) {
    console.info('----------- Search Item - Started... -----------');
    await driver.findElement(By.id("select-select-category")).click();
    await driver.findElement(By.id("OptBooks")).click();
    sleep(500);
    await driver.findElement(By.id("InputSearchValue")).click();
    await driver.findElement(By.id("InputSearchValue")).sendKeys(mockNewItem.name);
    await driver.findElement(By.id("InputSearchValue")).sendKeys(Key.ENTER);
    sleep(500);

    console.info('----------- Search Item - Done -----------')
}

module.exports = {
    searchItem
};