'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const {meow,x} = require('./middlewares/meow');
const {haha} = require('./middlewares/haha');
//====================================================================

app.use(express.json());
app.use(cors());
app.use(haha);
app.use(meow);

//====================================================================

app.get('/',(req,res)=>{
    res.send('You are at the main page of Haimouni\'s server');
})

app.get('/data',(req,res)=>{
    console.log('inside data route');
    res.send('You are at the data page');
})

app.get('/test',x('sdasd'),(req,res)=>{
    console.log('inside test route');
    res.send('You are at the test page');
})


function start(port) {
    app.listen(port,()=>console.log(`Server is runing at ${port}`))
}

module.exports = {app,start};