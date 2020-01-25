var xcelToJson= require('../../xcelToJson'); 
var helper= require('../../helper/helper');

describe('SAMPLE TEST', ()=>{

    console.log('Inside SAMPLE TEST');

    beforeAll(function(){
        console.log('Inside Before All');
    });

    afterAll(function(){
        console.log('Inside After All');
        browser.manage().deleteAllCookies()
        helper.browserClose();
    });

    beforeEach(function(){
	
    });
    
     
    afterEach(function(){
    
    }); 

    if(xcelToJson.executionFlag.testcase1 === "Y")
    {
        it('testcase_withoutErr', async ()=>{

            const rquiredTitle= await browser.getTitle();
            console.log('Title : ', rquiredTitle);
            
            await  expect(rquiredTitle).toEqual('Angular');
        });
    }

    if(xcelToJson.executionFlag.testcase2 === "N")
    {
        it('testcase_withErr', async ()=>{

            const rquiredTitle= await browser.getTitle();
            console.log('Title : ', rquiredTitle);
            
            await  expect(rquiredTitle).toEqual('Angular Failed');
        });
    }
    
    xit('testcase_diffExpectMessage', async ()=>{

        let value=10;
        let flag=false;

        await expect(parseInt(value)).toBeGreaterThan(20,'Value is 10 BCoz of this testcase failed');
        await  expect(parseInt(value)).not.toBeNull('value is not null');
        await expect(flag).toBe(true,'Flag is False');

    });
});