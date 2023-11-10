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