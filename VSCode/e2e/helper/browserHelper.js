var Helper = function(){

    this.waitForElementPresent  = function(element){
        browser.wait(() => (element.isPresent()), 60000);  //wait for element to be present
    }

    this.waitForElementDisplayed = function(element){
        browser.wait(() => (element.isDisplayed()), 60000);  //wait for element to be displayed
    }

    this.waitForElementVisibility = function(element){
        let EC = ExpectedConditions;
        let condition= EC.visibilityOf(element);  
        browser.wait(condition, 30000);            //wait for element meet condition
    }

    this.sleep = function (time){
        browser.sleep(time);  //wait for given time
    }

    this.getClassAtttribute = function(element){
        return element.getAtttribute('class');
    }

    this.getHiddenAtttribute = function(element){
        return element.getAtttribute('aria-hidden');
    }

    this.getDisabledAtttribute = function(element){
        return element.getAtttribute('aria-disabled');
    }

    this.getAtttributeValue = function(element){
        return element.getAtttribute('value');
    }

    this.getText = function(element){
        return element.getText();
    }

    this.performEscape = async function(){
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }

    this.performEnter = async function(){
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    this.performTab = async function(){
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
    }

    this.refreshPage = async function(){
        return browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('r').perform();
    }

    this.selectAll = async function(){
        return browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
    }

    this.copyContent = async function(){
        return browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('c').perform();
    }

    this.mouseMove = async function(element){
        return browser.actions().mouseMove(element).perform();
    }

    this.switchToNonAngularPage = function(){
        browser.ignoreSynchronization = true;
    };

    this.switchToAngularPage = function(){
        browser.ignoreSynchronization = false;
    };

    this.browserClose = async function(){
        return browser.close();
    }


}

module.exports = new Helper();