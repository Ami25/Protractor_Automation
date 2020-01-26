'use strict';

var fs= require('fs-extra');
const xcelToJson=require('convert-excel-to-json');

const result= xcelToJson({
    source: fs.readFileSync('../e2e/testdata/excel.xlsx'),
    header:{
        rows:1 //this row is not include in result 
    }
});

var dataRequired = function (){

    this.testConfig={
        url: result.data[0].C,       //here data is a sheet name of excelsheet
        username: result.data[0].A, 
        password: result.data[0].B
    };

    this.executionFlag={
        testcase1: result.regression[0].B,  //here regression is a sheet name of excelsheet
        testcase2: result.regression[1].B
    };
}


module.exports = new dataRequired();
