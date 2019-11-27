const {By, until} = require('selenium-webdriver');
const {mockNewItem} = require('./__mock__')

async function deleteItem(driver) {
    console.info('----------- Delete Item - Started... -----------');
    await driver.findElement(By.xpath("//button[@aria-controls='delete-menu']")).click();

    console.info('----------- Delete Item - Done -----------')
}

module.exports = {
    deleteItem
};