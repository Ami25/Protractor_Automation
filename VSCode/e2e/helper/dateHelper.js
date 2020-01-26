var dateHelper=function(){

    this.getCurrentDay=function(){
        var today=new Date();
        var dd= String(today.getDate()).padStart(2,'0');
        return dd;
    }

    this.getCurrentMonth=function(){
        var today=new Date();
        var mm= String(today.getMonth()+1).padStart(2,'0');
        return mm;
    }

    this.getCurrentYear=function(){
        var today=new Date();
        var yyyy= today.getFullYear();
        return yyyy;
    }

    this.getCurrentDate=function(DDMMYYYY, MMDDYYYY, YYYYMMDD){
        var today=new Date();
        var dd= String(today.getDate()).padStart(2,'0');
        var mm= String(today.getMonth()+1).padStart(2,'0');
        var yyyy= today.getFullYear();

        if(YYYYMMDD){
            date= yyyy + '/' + mm + '/' + dd;
            return date;

        } else if (DDMMYYYY){
            date= dd + '/' + mm + '/' + yyyy;
            return date;

        } else if (MMDDYYYY){
            date= mm + '/' + dd + '/' + yyyy;
            return date;
        }

    }

    this.daysInMonth=function(month, year){
        return new Date(year, month, 0).getDate();
    }

    this.getCustomeDateForCurrentDate=function(){
        var today= new Date();
        var dd= String(today.getDate()).padStart(2,'0');
        var mm= ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var thisMM= mm[today.getMonth()];
        var yyyy= today.getFullYear();

        date = thisMM + '-' + dd + '-' + yyyy;
        return date;
    }

}

module.exports=new dateHelper(); 