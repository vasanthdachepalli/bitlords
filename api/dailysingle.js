const data = require('../models/catoregywisedaily');
const express = require('express');
const app = express.Router();
const date = require('./dategenerater');
const date1 = new Date();
const month = require('../models/cateregywisemonthly');
const year = require('../models/cateregywiseyearly');
const monthgenerator = require('../jshelpers/monthnamegenereater');
app.get('/dailysingle',function(req,res){
const values1 =[];

data.findOne({tag:req.user.username,date:date()})
.then((doc)=>{
values1.push(doc.Shopping);
values1.push(doc.Entertainment);
values1.push(doc.Medical);
values1.push(doc.Food);
values1.push(doc.others);

const data1 = {values:values1};
res.json(data1);

})
.catch((err) =>{
    console.log(err);
})

})
app.get('/month',function(req,res){
    const values1 =[];

month.findOne({tag:req.user.username,month:monthgenerator(date1.getMonth())})
.then((doc)=>{
values1.push(doc.Shopping);
values1.push(doc.Entertainment);
values1.push(doc.Medical);
values1.push(doc.Food);
values1.push(doc.others);

const data1 = {values:values1};
res.json(data1);

})
.catch((err) =>{
    console.log(err);
})
})

app.get('/year',function(req,res){
    const values1 =[];

year.findOne({tag:req.user.username,year:date1.getFullYear()})
.then((doc)=>{
values1.push(doc.Shopping);
values1.push(doc.Entertainment);
values1.push(doc.Medical);
values1.push(doc.Food);
values1.push(doc.others);

const data1 = {values:values1};
res.json(data1);

})
.catch((err) =>{
    console.log(err);
})
})
module.exports = app;


