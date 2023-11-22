const express = require('express');
const Router = express.Router();
const daily = require('../models/transctiondaily');

Router.get('/daily',(req,res)=>{

    daily.find({tag:req.user.username,date:req.query.date})
    .then((data)=>{
        res.json(data);
    })
})

const weekly = require('../models/transWeekly')
Router.get('/weekly',(req,res)=>{

    weekly.find({tag:req.user.username,startingDate:req.query.week})
    .then((data)=>{
        res.json(data);
    })
})
const monthly = require('../models/transMonthly');
Router.get('/monthly',function(req,res){
    monthly.find({tag:req.user.username,month:req.query.month})
    .then((data)=>{
        res.json(data);
    })

})

const yearly = require('../models/transYearly');
Router.get('/yearly',(req,res)=>{
    yearly.find({tag:req.user.username,year:req.query.year})
    .then((data)=>{
        res.json(data);
    })

})
module.exports = Router;