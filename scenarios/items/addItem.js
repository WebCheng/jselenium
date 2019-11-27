const {By, until} = require('selenium-webdriver');
const {mockNewItem} = require('./__mock__')

async function addItem(driver) {
    console.info('----------- Add Item - Started... -----------');
    await driver.findElement(By.id('title')).sendKeys(mockNewItem.name);
    await driver.findElement(By.id('location')).sendKeys(mockNewItem.location);
    await driver.findElement(By.id('description')).sendKeys(mockNewItem.description);
    await driver.findElement(By.id('price')).sendKeys(mockNewItem.price);
    await driver.findElement(By.id('category')).sendKeys(mockNewItem.category);
    await driver.findElement(By.xpath('//button[@type=\'submit\']')).click();

    console.info('----------- Add Item - Done -----------')
}

module.exports = {
    addItem
};