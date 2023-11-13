const express = require('express');
const Router = express.Router();
const daily = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const dategenerater = require('./dategenerater');
Router.get('/daily',function(req,res){
   
const values=[];
const labels =[];
daily.find({tag:req.user.username})
.then(doc=>{
    doc.forEach(element => {
        values.push(element[req.query.category])
        labels.push(element.date)
    });
    data ={values:values,labels:labels};
    res.json(data);
})
.catch(err=>{
    console.log(err);
})
})

Router.get('/month',function(req,res){
   
    const values=[];
    const labels =[];
    monthly.find({tag:req.user.username})
    .then(doc=>{
        doc.forEach(element => {
            values.push(element[req.query.category])
            labels.push(element.month)
        });
        data ={values:values,labels:labels};
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    })
    })
  const week = require('../models/cateregywiseweekly');
    //const weekgenerater = require('../jshelpers/weekstartandendgenerater');
    // const week1 = weekgenerater(require('./dategenerater')())
   Router.get('/week',function(req,res){
    const values1 =[];
    //console.log(req);
    week.findOne({tag:req.user.username,startdate: req.query.week})
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
 const weekly = require('../models/cateregywiseweekly');
   Router.get('/week1',function(req,res){
    const values=[];
    const labels =[];
    weekly.find({tag:req.user.username})
    .then(doc=>{
        doc.forEach(element => {
            values.push(element[req.query.category])
            labels.push(element.startdate)
        });
        data ={values:values,labels:labels};
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    })

   })

    Router.get('/year',function(req,res){
        const values=[];
    const labels =[];
    yearly.find({tag:req.user.username})
    .then(doc=>{
        doc.forEach(element => {
            values.push(element[req.query.category])
            labels.push(element.year)
        });
        data ={values:values,labels:labels};
        res.json(data);
    })
    .catch(err=>{
        console.log(err);
    })
    })
module.exports = Router;