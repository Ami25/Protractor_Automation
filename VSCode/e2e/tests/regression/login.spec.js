var xcelToJson = require('../../testdata/xcelToJson');
var excelData = require('../../testdata/excelData');
var helper = require('../../helper/browserHelper');
var dateHelper = require('../../helper/dateHelper');
var login = require('../../pages/login.po');
var constantData = require('../../testdata/constantData');

describe('LogIn Page Test', () => {

    console.log('Inside SignIn Page Test');

    beforeAll(function () {
        console.log('Inside Before All');
        browser.get(constantData.url); 
        console.log('URL in Conf:',constantData.url)
    });

    beforeEach(function () {
        console.log('Inside Before Each');
        //browser.ignoreSynchronization = true;
    });


    afterEach(function () {
        console.log('Inside After Each');
        browser.manage().logs().get('browser').then(function (browserLog) {
            //expect(browserLog.length).toEqual(0);
            if (browserLog.length) {
                //console.error('log: ' + JSON.stringify(browserLog));
            }
        });
    });

    it('LogIn button should present in UI', async () => {
        helper.switchToNonAngularPage();
        var res = login.clickLogIn();
        await expect(res).toBe(true);
        console.log('LogIn button is present in UI')
    });

    it('LogIn validation', async () => {
        helper.switchToNonAngularPage();
        var res1 = login.setLogInDetails(constantData.username, constantData.password);
        var res2 = login.clickSubmit();
       
        await expect(res1).toBe(true);
        await expect(res2).toBe(true);
        console.log('LogIn validation Successfully');
    });

    afterAll(function () {
        console.log('Inside After All');
    });
});