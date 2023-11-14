const express = require('express');
const Router = express.Router();
const daily = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const weekly = require('../models/cateregywiseweekly');


Router.get('/daily',function(req,res){
    daily.find({tag:req.user.username})
    .then(doc =>{
        res.json(doc);
    })
})
Router.get('/week',function(req,res){
    weekly.find({tag:req.user.username})
    .then(doc =>{
        res.json(doc);
    })
})
Router.get('/month',function(req,res){
   monthly.find({tag:req.user.username})
   .then(doc=>{
    res.json(doc);
   })
})
Router.get('/year',function(req,res){
    yearly.find({tag:req.user.username})
    .then((doc)=>{
      res.json(doc)
    })
})


module.exports = Router