const {Builder} = require('selenium-webdriver');
const {signUp, login} = require('./scenarios/users')
// const {testOsusedItems} = require('./scenarios/items')

const test = async () => {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await signUp(driver)
        await login(driver)

        // await testOsusedItems()
    } catch (e) {
        console.error('Error: ', e)
    }
};

test();