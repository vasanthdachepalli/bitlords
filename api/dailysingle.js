const data = require('../models/catoregywisedaily');
const express = require('express');
const app = express.Router();
const date = require('./dategenerater');
const date1 = new Date();
const month = require('../models/cateregywisemonthly');
const week = require('../models/cateregywiseweekly');
const year = require('../models/cateregywiseyearly');
const monthgenerator = require('../jshelpers/monthnamegenereater');
app.get('/dailysingle',function(req,res){
const values1 =[];

data.findOne({tag:{ $eq:req.user.username},date:{ $eq:req.query.date}})
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
const weekgenerater = require('../jshelpers/weekstartandendgenerater');
const week1 = weekgenerater(date1)
app.get('/week',function(req,res){
    const values1 =[];

week.findOne({tag:{ $eq:req.user.username},startdate:{ $eq:week1.monday}})
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

month.findOne({tag:{ $eq:req.user.username},month:{ $eq:monthgenerator(req.query.month)}})
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

year.findOne({tag:{ $eq:req.user.username},year:{ $eq:req.query.year}})
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

app.get('/week',function(req,res){

})
module.exports = app;


