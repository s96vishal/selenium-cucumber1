const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key,until } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();


Given('I visit tosca sample app website',{timeout: 60 * 1000}, async function () {
    await driver.get('http://sampleapp.tricentis.com/101/');
});

When('I click on automobile tab', {timeout: 90 * 1000},async function () {
     driver.wait(until.elementLocated(By.id('nav_automobile')),30000).then(()=>{
         driver.takeScreenshot().then((image,err)=>{
             require('fs').writeFile('screenshot/screen1.png',image,'base64',err=>{});
         })
        driver.findElement(By.id('nav_automobile')).click();
    });
});

Then('I should see Enter Vehicle Data page', {timeout: 60 * 1000}, async function () {

    await driver.wait(until.elementLocated(By.id('entervehicledata')),30000);

    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen2.png',image,'base64',err=>{});
    })
});

When('I enter details and click next', {timeout: 90 * 1000},async function () {
    // const element = await driver.findElement(By.name('q'));
    // element.sendKeys(searchTerm, Key.RETURN);
    // element.submit();
    await driver.wait(until.elementLocated(By.id('entervehicledata')),30000);

    await driver.findElement(By.id('make')).sendKeys('Audi',Key.RETURN);
    await driver.findElement(By.id('engineperformance')).sendKeys("120",Key.RETURN)
    await driver.findElement(By.id('dateofmanufacture')).sendKeys('04/25/2015',Key.RETURN);
    await driver.findElement(By.id('numberofseats')).sendKeys('5',Key.RETURN);
    await driver.findElement(By.id('fuel')).sendKeys('Diesel',Key.RETURN);
    await driver.findElement(By.id('listprice')).sendKeys('10000',Key.RETURN);
    await driver.findElement(By.id('licenseplatenumber')).sendKeys('12345678',Key.RETURN);
    await driver.findElement(By.id('annualmileage')).sendKeys('168',Key.RETURN);
   
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen3.png',image,'base64',err=>{});
    })
    await driver.sleep(5000);
    await driver.findElement(By.id('nextenterinsurantdata')).click();
});

Then('I should see Insurant Data page', {timeout: 60 * 1000}, async function () {
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen4.png',image,'base64',err=>{});
    })
    await driver.wait(until.elementLocated(By.id('enterinsurantdata')),30000);
});


When('I enter insurant data and click next', {timeout: 90 * 1000},async function () {

    await driver.wait(until.elementLocated(By.id('enterinsurantdata')),30000);

    await driver.findElement(By.id('firstname')).sendKeys("Insurant",Key.RETURN);
    await driver.findElement(By.id('lastname')).sendKeys("services",Key.RETURN);
    await driver.findElement(By.id('birthdate')).sendKeys("03/25/1995",Key.RETURN);
    await driver.findElement(By.className('ideal-radio')).click();
    await driver.findElement(By.id('streetaddress')).sendKeys("hinjewadi pune",Key.RETURN);
    await driver.findElement(By.id('country')).sendKeys("India",Key.RETURN);
    await driver.findElement(By.id('zipcode')).sendKeys("411057",Key.RETURN);
    await driver.findElement(By.id('city')).sendKeys("Pune",Key.RETURN);
    await driver.findElement(By.id('occupation')).sendKeys("Employee",Key.RETURN);
    await driver.findElement(By.className('ideal-check')).click();
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen5.png',image,'base64',err=>{});
    })
    await driver.sleep(5000);
    await driver.findElement(By.id('nextenterproductdata')).click();
});

Then('I should see Product Data page', {timeout: 60 * 1000}, async function () {
    await driver.sleep(2000);
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen6.png',image,'base64',err=>{});
    })
    await driver.wait(until.elementLocated(By.id('enterproductdata')),30000);
});

When('I enter product data and click next', {timeout: 90 * 1000},async function () {

    await driver.wait(until.elementLocated(By.id('enterproductdata')),30000);

    await driver.findElement(By.id('startdate')).sendKeys("09/05/2020",Key.RETURN);
    await driver.findElement(By.id('insurancesum')).sendKeys("3.000.000,00",Key.RETURN);
    await driver.findElement(By.id('meritrating')).sendKeys("Bonus 9",Key.RETURN);
    await driver.findElement(By.id('damageinsurance')).sendKeys("Partial Coverage",Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="insurance-form"]/div/section[3]/div[5]/p/label[1]/span')).click();
    await driver.findElement(By.id('courtesycar')).sendKeys('Yes',Key.RETURN);
    await driver.sleep(5000);
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen7.png',image,'base64',err=>{});
    })
    await driver.findElement(By.id('nextselectpriceoption')).click();
});

Then('I should see price options', {timeout: 60 * 1000}, async function () {
    await driver.sleep(2000);
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen8.png',image,'base64',err=>{});
    })
    await driver.wait(until.elementLocated(By.id('selectpriceoption')),30000);
});

When('I select pricing option and click next', {timeout: 90 * 1000},async function () {

    await driver.wait(until.elementLocated(By.id('selectpriceoption')),30000);

    await driver.findElement(By.xpath('//*[@id="priceTable"]/tfoot/tr/th[2]/label[1]/span')).click();
    await driver.sleep(10000);
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen9.png',image,'base64',err=>{});
    })
    await driver.findElement(By.id('sendquote')).click();
});

Then('I should see', {timeout: 60 * 1000}, async function () {
    await driver.sleep(2000);
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen10.png',image,'base64',err=>{});
    })
    await driver.wait(until.elementLocated(By.id('sendquote')),30000);
});

When('I enter send quote data and click send', {timeout: 90 * 1000},async function () {

    await driver.wait(until.elementLocated(By.id('sendquote')),30000);

    await driver.findElement(By.id('email')).sendKeys("abc@xyz.com",Key.RETURN);
    await driver.findElement(By.id('phone')).sendKeys("8365698889",Key.RETURN);
    await driver.findElement(By.id('username')).sendKeys("s96vishal",Key.RETURN);
    await driver.findElement(By.id('password')).sendKeys("Vishal123",Key.RETURN);
    await driver.findElement(By.id('confirmpassword')).sendKeys("Vishal123",Key.RETURN);
    await driver.findElement(By.id('Comments')).sendKeys("Good website",Key.RETURN);
    await driver.sleep(5000);
    driver.takeScreenshot().then((image,err)=>{
        require('fs').writeFile('screenshot/screen11.png',image,'base64',err=>{});
    })
    await driver.findElement(By.id('sendemail')).click();
});

Then('I should see a message', {timeout: 60 * 1000}, async function () {
    await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.className('confirm')));
    await driver.sleep(3000);
});


AfterAll('end', async function(){
    await driver.quit();
});