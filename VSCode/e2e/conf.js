var xcelToJson= require('../e2e/testdata/xcelToJson');
var jasmineReporters= require('jasmine-reporters');
var HTMLReport= require('protractor-html-reporter-2');
var fs= require('fs-extra');
var constantData= require('../e2e/testdata/constantData');
var helper = require('../e2e/helper/browserHelper');

exports.config={
    directConnect : true,

    framework: "jasmine",

    capabilities:{
        browserName : 'chrome'
    },

    jasmineNodeOpts:{
        showColors: true, //In terminal it will show the colors for pass, fail and skip
        defaultTimeoutInterval: 60000,
    },

    onPrepare: function()
    {
        browser.manage().window().maximize();
        helper.switchToNonAngularPage();
       // browser.get(constantData.url); 
     //  console.log('URL in Conf:',constantData.url)
       //browser.get(xcelToJson.testConfig.url); 

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            cosolidateAll: true,
            savePath: './reports/xml/',
            filePrefix: 'xmlResults'
        }));
        /**
         * @description 
         * creating a directory for reports
         */
        
        fs.emptyDir('./reports/screenshots',function(err){
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function (result){
                if(result.status == 'failed'){
                    browser.getCapabilities().then(function (caps){
                       var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function(png){
                            var stream = fs.createWriteStream('./reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer.from(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });

    },

    onComplete: function(){
        var browserName, browserVersion, platform;
        var capsPromise= browser.getCapabilities();

        capsPromise.then(function(caps){
            browserName= caps.get('browserName');
            browserVersion= caps.get('version');
            platform= caps.get('platform');

            testConfig={
                reportTitle: 'Protractor Test Execution by Amol QA-Automation',
                outputPath: './reports/',
                outputFilename: 'HTMLReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuitesName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('./reports/xml/xmlResults.xml',testConfig);
        });
    },

    suites:{
        amol: ['tests/regression/sample.spec.js'],
        xyz: ['tests/regression/login.spec.js','tests/regression/logout.spec.js'],
        abc: ['tests/regression/login.spec.js','tests/regression/help.spec.js',
              'tests/regression/logout.spec.js']
    }
}