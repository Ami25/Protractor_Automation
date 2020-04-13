var helper = require('../../helper/browserHelper');
var logout = require('../../pages/logout.po');
var help = require('../../pages/help.po');
var constantData= require('../../testdata/constantData');

describe('Help Page Test', () => {

    console.log('Inside Help Page Test');

    beforeAll(function () {
        console.log('Inside Before All');
        helper.switchToNonAngularPage();
        //browser.get(constantData.url);
        //browser.get(constantData.helpurl);
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

    it('Help page Validation', async () => {
        helper.switchToNonAngularPage();
        var res = logout.clickHelp();
        await expect(res).toBe(true);

        console.log('Help Page validation Successfully');
        
    });


    it('Help page Header Validation', async () => {
        browser.get(constantData.helpurl);
        helper.switchToNonAngularPage();
        
        var headerValue= `We're here to help.`;
        var UIHeaderValue=await help.headerValue();
        console.log(headerValue+' UI Header Value: '+UIHeaderValue);
        await expect(UIHeaderValue).toEqual(headerValue);
        console.log('Header validation Successfully');
    });

    it('Contact US button Validation', async () => {
        helper.switchToNonAngularPage();
        var res=help.clickContactUs();
        await expect(res).toBe(true);
        console.log('Contact US button validation Successfully');
    });

    it('Close Contact US Pop up Validation', async () => {
        helper.switchToNonAngularPage();
        var res=help.clickClose();
        await expect(res).toBe(true);
        console.log('Close contact US Pop up validation Successfully');
    });

    afterAll(function () {
        console.log('Inside After All');
       // browser.manage().deleteAllCookies();
        //helper.browserClose();
    });

});