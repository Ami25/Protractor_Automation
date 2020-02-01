var xcelToJson = require('../../testdata/xcelToJson');
var excelData = require('../../testdata/excelData');
var helper = require('../../helper/browserHelper');
var dateHelper = require('../../helper/dateHelper');
var logout = require('../../pages/logout.po');
var login = require('../../pages/login.po');
var constantData = require('../../testdata/constantData');

describe('Home Page Test', () => {

    console.log('Inside Home Page Test');

    beforeAll(function () {
        console.log('Inside Before All');
        helper.switchToNonAngularPage();
        browser.get(constantData.url);
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

    it('LogOut validation', async () => {
        helper.switchToNonAngularPage();
        var res = logout.logOutMethod();

        await expect(res).toBe(true);
        //await expect(login.signIn).isPresent();
        console.log('LogOut validation Successfully');
    });

    afterAll(function () {
        console.log('Inside After All');
        browser.manage().deleteAllCookies();
        //helper.browserClose();
    });

});