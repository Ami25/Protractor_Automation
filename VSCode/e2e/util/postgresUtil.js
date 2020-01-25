var pg= require('pg');

var conString= "";
var client=new pg.Client(conString);
client.connect();

//refer node-postgres.com
class postgresDB{

    static async fetchQuery(query){
        const res= await client.query(query);
        console.log(res); //Print DB response for query
        return res;
    }

    static async endConnection(){
        client.end();
    }
}

module.exports= postgresDB;