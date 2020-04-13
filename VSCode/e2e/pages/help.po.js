
var helpPage = function () {
    'use strict';
    this.contactUs= element(by.linkText('Contact Us'));
    this.close= element(by.buttonText('Close'));
    this.textArea = $('#solvvy-v4 > div.step-content > div > div.content > textarea');
    this.header=element(by.css('.here-to-help'));
    //******************** functions *******************
    
    this.clickContactUs = function () {
        this.contactUs.click();
        this.textArea.sendKeys('NO Questions');
        return true;
    };

    this.clickClose = function () {
        this.close.click();
        return true;
    };

    this.headerValue = async () => {
        let value=this.header;
        var header= value.getText();
        return header;
    };
    

};
module.exports = new helpPage();