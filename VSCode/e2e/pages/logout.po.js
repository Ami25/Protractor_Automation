var login=require('../pages/login.po');

var logoutPage = function () {
    'use strict';
    this.signOut = $('div.Header-item.position-relative.mr-0.d-none.d-lg-flex details details-menu > form button');    ;
    this.summary = $('div.Header-item.position-relative.mr-0.d-none.d-lg-flex details summary img');
    //******************** functions *******************
    this.signOutMethod = function () {
        this.summary.click();
        this.signOut.click();
        return true;
    };
};
module.exports = new logoutPage();