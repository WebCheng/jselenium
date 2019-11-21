var chrome = require('selenium-webdriver/chrome');
chrome.setDefaultService(new chrome.ServiceBuilder(require('chromedriver').path).build());
const {example} = require('./scenarios/google')
// function getFunctions() {
//     ''
// }

try {
    example()
    // functions = getFunctions()
    // for fname in fucntions:
    //     const fn = new function(fname);
    //     fn.start()
} catch (e) {
    console.log(e)
}

// (async function example() {
//     const driver = await new Builder().forBrowser('chrome').build();
//     try {
//         await driver.get('http://ec2-18-191-174-133.us-east-2.compute.amazonaws.com:3000/items');
//         await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//         await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//     } finally {
//         await driver.quit();
//     }
// })();