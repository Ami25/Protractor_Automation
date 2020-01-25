
class samplePO{

    static async getHomePageHeaders(){
        var headerList= $$("mat-toolbar aio-top-menu  ul  li");
        const res= await headerList.getText();
        console.log('HeaderLength: ',res.length);

        var totalHeaders=[];
        for(let i=1;i<=res.length;i++)
        {
            var header= $(`aio-top-menu > ul > li:nth-of-type(${i})`);
            const headerName= await header.getText();
            totalHeaders.push(headerName);
        }
        console.log('TotalHeaderNames: ',totalHeaders);
        return totalHeaders;
    }
}

module.exports = samplePO; 