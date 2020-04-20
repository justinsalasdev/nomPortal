const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const dbName = 'User';
const collName = 'user';

const user = 'yelpcamp';
const password = 'z1XiPs4M5XIyT52i';

const localURL = 'mongodb://127.0.0.1:27017';
const httpURL = `mongodb+srv://${user}:${password}@cluster0-v2vtu.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const uri = localURL;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });


const initCollection = new Promise((resolve,reject)=>{
    client.connect().then(connectedClient=>{
        connectedClient.db(dbName).collection(collName,(error,collection)=>{
            if(error){
                reject(error);
            }else{
                resolve(collection);
            };       
        });
    }).catch(err => console.log("Can't connect client ", err.message, " |Can't start server"));
});


module.exports = {initCollection};



