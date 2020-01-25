import { browser, element } from "protractor";

async function documentCall(element){
    return await document.querySelector(element);
}

async function documentCallAll(element){
    return await document.querySelectorAll(element);
}

async function documentCallCookie(element){
    return await document.cookie(element);
}

async function documentCallLocation(element){
    return await document.location(element);
}

/*
    How to call documentCall QuerySelector, Cookie and Location
  
    await browser.executeScript(documentCall(element));
    await browser.executeScript(documentCallAll(element));
    await browser.executeScript(documentCallCookie(element));
    await browser.executeScript(documentCallLocation(element));

*/  
