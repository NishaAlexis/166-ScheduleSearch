const assert = require('assert')

// it('should return true', () => {
//     assert.equal(true, true)
// })

require('chromedriver');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout Firebase app', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Opens firebase app', async function() {
        await driver.get('https://schedule-search.firebaseapp.com');
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);

        let title = await driver.getTitle();
        assert.equal(title, 'Schedule Searcher');
    });
    after(() => driver && driver.quit);
})

describe('Clicks button in Firebase app', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Opens and clicks button', async function() {
        await driver.get('https://schedule-search.firebaseapp.com');
        //await driver.findElement(By.id('lst-ib')).click();
        // Enter keywords and click enter
        //await driver.findElement(By.id('lst-ib')).sendKeys('dalenguyen', Key.RETURN);
        // Wait for the results box by id
        //await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        await driver.findElement(By.id('trigger')).click();

        let title = await driver.getTitle();
        assert.equal(title, 'Schedules');
    });
    after(() => driver && driver.quit);
})