const {Builder, By, Key, until} = require('selenium-webdriver');
const {URL, mockNewUser, mockNewItem} = require('./__mock__');
const { sleep } = require('../../common/utils')

async function testOsusedItems() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        // Loading home page
        await driver.get(URL);
        console.info('loaded url: ', await driver.getCurrentUrl())

        await driver.findElement(By.xpath('//span[text()=\'Login\']')).click();
        console.info('1. login clicked');
        await driver.wait(until.urlIs(`${URL}/login`));
        console.info('2. current url: ', await driver.getCurrentUrl());
        await driver.findElement(By.id('email')).sendKeys(mockNewUser.email);
        await driver.findElement(By.id('password')).sendKeys(mockNewUser.password);
        await driver.findElement(By.xpath('//button[@type=\'submit\']')).click();
        sleep(1000);
        await driver.findElement(By.id('AddItem')).click();

        sleep(1000);
        console.info('3. current url: ', await driver.getCurrentUrl());
        await driver.findElement(By.id('title')).sendKeys(mockNewItem.name);
        await driver.findElement(By.id('location')).sendKeys(mockNewItem.location);
        await driver.findElement(By.id('description')).sendKeys(mockNewItem.description);
        await driver.findElement(By.id('price')).sendKeys(mockNewItem.price);
        await driver.findElement(By.id('category')).sendKeys(mockNewItem.category);
        await driver.findElement(By.xpath('//button[@type=\'submit\']')).click();

        sleep(2000);
        await driver.findElement(By.id("select-select-category")).click()
        await driver.findElement(By.css(".MuiListItem-root:nth-child(2)")).click()
        sleep(2000);


        //TODO: DELETE: delete an item -> check if the item is deleted in the list

    } finally {
        await driver.quit();
    }
}

module.exports = {
    testOsusedItems
};