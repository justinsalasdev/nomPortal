//custom functions--------------------------------------------------------------
const log = console.log;
const newObj = (obj) => Object.assign({},obj);
const collErrorCallback = (error) => log('Failed to get collection ', error)


//dependencies-----------------------------------------------------------------
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongodb = require('mongodb');


//custom modules----------------------------------------------------------------
const mongo = require('./mongo');



const collection = mongo.initCollection;
const ObjectID = mongodb.ObjectID;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.set("view engine","ejs");



app.get('/',(req,res)=>{
    res.render('landing');
})


app.get('/register',(req,res)=>{
    res.render('register');
})



app.get('/login',(req,res)=>{
    res.render('login');
})






app.get('/test-login',(req,res)=>res.render('login'));
app.get('/test-register',(req,res)=>res.render('register'));
app.get('/test-landing',(req,res)=>res.render('landing'));














collection.then(collection=>{
    log(`${collection.collectionName} collection was successfully loaded`);
    app.listen(3000,()=> log('The User Server has been started :D'));
}).catch(err => log('Failed to fetch collection - server not started ', err.message))





