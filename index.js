var chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder(require('chromedriver').path).build());
const {signUp, login} = require('./scenarios/users')
const {testOsusedItems} = require('./scenarios/items')

try {
    signUp().then(e => {
        console.log(e)
        login().then(e => {
            console.log(e)
        }).catch(e => console.error(e));
    }).catch(e => console.error(e));

    testOsusedItems().then(e => {
        console.log(e)
    }).catch(e => console.error(e));
} catch (e) {
    console.log(e)
}
