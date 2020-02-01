var login=require('../pages/login.po');

var logoutPage = function () {
    'use strict';
    this.img = $('#dropdown-toggle div img');
    this.logOut = $('#sign-out-link');    
    //******************** functions *******************
    this.logOutMethod = function () {
        this.img.click();
        this.logOut.click();
        return true;
    };
};
module.exports = new logoutPage();