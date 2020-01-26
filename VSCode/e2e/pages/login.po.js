var logout=require('../pages/logout.po');

var loginPage = function () {
    'use strict';
    this.signIn =$('a.HeaderMenu-link.no-underline.mr-3');
    this.userName = $('#login_field');
    this.password = $('#password');
    this.submitButton = $('#login form div.auth-form-body.mt-3 input.btn.btn-primary.btn-block');
    //******************** functions *******************
    this.clickSignIn = function () {
        this.signIn.click();
        return true;
    };
    this.setSignInDetails = function (username, password) {
        this.userName.clear();
        this.userName.sendKeys(username);
        this.password.clear();
        this.password.sendKeys(password);
        return true;
    };
    this.clickSubmit = function () {
        this.submitButton.click();
        return true;
    };
};
module.exports = new loginPage();