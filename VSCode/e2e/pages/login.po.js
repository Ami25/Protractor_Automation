var logout=require('../pages/logout.po');

var loginPage = function () {
    'use strict';
    this.logIn =$('#sign-in > a');
    this.userName = $('#user_login');
    this.password = $('#login__user_password');
    this.submitButton = $('#user_submit');
    this.back= $('div.react-root main div a');
    //******************** functions *******************
    this.clickLogIn = function () {
        this.logIn.click();
        return true;
    };
    this.setLogInDetails = function (username, password) {
        this.userName.clear();
        this.userName.sendKeys(username);
        this.password.clear();
        this.password.sendKeys(password);
        return true;
    };
    this.clickSubmit = function () {
        this.submitButton.click();
      /*  if(login.back.exists())
        {
            login.back.click();
        } */
        return true;
    };
};
module.exports = new loginPage();