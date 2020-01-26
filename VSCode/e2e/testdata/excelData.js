var excel = require('xlsx');

class excelData {
    
    readData (sheetName, filePath) {

        var workbook = excel.readFile(filePath);
        var worksheet = workbook.Sheets[sheetName];
        var arr = excel.utils.sheet_to_json(worksheet);
        return arr;

        }
    
    
}
module.exports =new excelData();