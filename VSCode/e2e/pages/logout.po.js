
var logoutPage = function () {
    'use strict';
    this.img = $('#dropdown-toggle div img');
    this.help =$('#help-link');
    this.logOut = $('#sign-out-link');    
    //******************** functions *******************
    this.logOutMethod = function () {
        this.img.click();
        this.logOut.click();
        return true;
    };

    this.clickHelp = function () {
        this.img.click();
        this.help.click();
        return true;
    };
};
module.exports = new logoutPage();