var xcelToJson= require('../../testdata/xcelToJson'); 
var excelData= require('../../testdata/excelData'); 
var helper= require('../../helper/browserHelper');
var dateHelper= require('../../helper/dateHelper');
var samplePO= require('../../pages/sample.po');
var constantData= require('../../testdata/constantData'); 

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
        console.log('Inside Before Each');
        browser.ignoreSynchronization = true;
    });
    
     
    afterEach(function(){
        console.log('Inside After Each');
        browser.manage().logs().get('browser').then(function (browserLog) {
            //expect(browserLog.length).toEqual(0);
            if (browserLog.length) {
                //console.error('log: ' + JSON.stringify(browserLog));
            }
        });
    }); 

    it('testcase_ExcelData', async ()=>{
       // console.log('sheetName',constantData.sheetName + " FilePath", constantData.filePath)
       var flag=false;
        var testdata = excelData.readData(constantData.sheetName, constantData.filePath);
        testdata.forEach(function (data) {
            console.log('From Excel: ', data.ExecutionFlag);
            console.log('From Excel: ', data.TestcaseID);
            flag=true;
            });
        console.log('From testcase_ExcelData: ',testdata);

        await expect(flag).toBe(true);
    });
    

    if(xcelToJson.executionFlag.testcase1 === "Y")
    {
        it('testcase_withoutErr', async ()=>{

            const rquiredTitle= await browser.getTitle();
            console.log('Title : ', rquiredTitle);
            
            await  expect(rquiredTitle).toEqual('Angular');
        });
    }

    if(xcelToJson.executionFlag.testcase2 === "Y")
    {
        xit('testcase_withErr', async ()=>{

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

    it('testcase_HeaderList', async ()=>{
        const headers = await samplePO.getHomePageHeaders(); 
        console.log('Inside IT block: ',headers);

        await expect(headers).toEqual(['FEATURES','DOCS','RESOURCES','EVENTS','BLOG']);
    });

    xit('testcase_DateHelper', async ()=>{
        const currentDay= await dateHelper.getCurrentDay();
        console.log('CurrentDay: ',currentDay);

        const currentMonth= await dateHelper.getCurrentMonth();
        console.log('CurrentMonth: ',currentMonth);

        const currentYear= await dateHelper.getCurrentYear();
        console.log('CurrentYear: ',currentYear);

        const currentDate1= await dateHelper.getCurrentDate(true);
        console.log('CurrentDate-DDMMYYYY: ',currentDate1);

        const currentDate2= await dateHelper.getCurrentDate(null, true);
        console.log('CurrentDate-MMDDYYY: ',currentDate2);

        const currentDate3= await dateHelper.getCurrentDate(null, null, true);
        console.log('CurrentDate-YYYYMMDD: ',currentDate3);

        const daysInMonth= await dateHelper.daysInMonth(2, 2020);
        console.log('NumOfDaysInMonth: ',daysInMonth);

        const customCurrentDate= await dateHelper.getCustomeDateForCurrentDate();
        console.log('CustomCurrentDate=Month-dd-yyyy: ',customCurrentDate);
    
    
    
    });

});