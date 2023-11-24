const express = require("express");
const user = require("../models/catoregywisedaily");
const Router = express.Router();
const transtiondata = require('../models/transctiondaily');
const salarydata = require('../models/userdata');
const dategenerater = require('../api/dategenerater');
Router.get("/",require('../controllers/deleter'),require('../controllers/healperForhomePage'),function(req,res){


salarydata.findOne({tag: { $eq:req.user.username }})
.then(doc =>{
   transtiondata.find({tag: { $eq:req.user.username},date: { $eq:dategenerater()}})
   .then(records =>{
    
    res.render('home',{
        salary:doc.balance,
        saving:doc.saving,
        item:records
    })
   })
   .catch(err =>{
    console.log(err);
   })
})
.catch(err =>{
    console.log(err);
   })
})

const date = new Date();
Router.post("/add",require('../controllers/updaterForDMW'),function(req,res){
  

    salarydata.findOne({tag:{ $eq:req.user.username}})
    .then(doc =>{
       
        salarydata.findOneAndUpdate({tag:{ $eq:req.user.username}},{balance:(doc.balance- req.body.amount)})
        .then(()=>{
            console.log("updated succesfully");
        })
        .catch(err =>{
            console.log(err);
           })
    })
    .catch(err =>{
        console.log(err);
       })
    transtiondata.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:req.body.category,
        name:req.body.name,
        date: dategenerater(),
        monthnumber:date.getMonth(),
        type:"debit"
    })
    const weekly = require('../models/transWeekly');
    const monthly = require('../models/transMonthly');
    const yearly = require('../models/transYearly');

    const weekdate = require('../jshelpers/weekstartandendgenerater')(date);
    weekly.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:req.body.category,
        name:req.body.name,
        date: dategenerater(),
        month:date.getMonth(),
        startingDate:weekdate.monday,
        endingDate:weekdate.sunday,
        type:"debit"
    })
    monthly.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:req.body.category,
        name:req.body.name,
        date: dategenerater(),
        month:require('../jshelpers/monthnamegenereater')(date.getMonth()),
        year:date.getFullYear(),
        type:"debit"
    })
    yearly.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:req.body.category,
        name:req.body.name,
        date: dategenerater(),
        year:date.getFullYear(),
        type:"debit"
    })

    res.redirect("/home");
})



Router.post("/addcerdit",require('../controllers/updaterForDMW'),function(req,res){
  

    salarydata.findOne({tag:{ $eq:req.user.username}})
    .then(doc =>{
       
        salarydata.findOneAndUpdate({tag:{ $eq:req.user.username}},{balance:(parseInt(doc.balance,10) + parseInt(req.body.amount,10))})
        .then(()=>{
            console.log("updated succesfully");
        })
        .catch(err =>{
            console.log(err);
           })
    })
    .catch(err =>{
        console.log(err);
       })


    transtiondata.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:"cerbited amm",
        name:req.body.name,
        date: dategenerater(),
        monthnumber:date.getMonth(),
        type:"crebit"
    })
    const weekly = require('../models/transWeekly');
    const monthly = require('../models/transMonthly');
    const yearly = require('../models/transYearly');

    const weekdate = require('../jshelpers/weekstartandendgenerater')(date);
    weekly.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:"cerbited amms",
        name:req.body.name,
        date: dategenerater(),
        month:date.getMonth(),
        startingDate:weekdate.monday,
        endingDate:weekdate.sunday,
        type:"crebit"
    })
    monthly.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category: "cerbited amms",
        name:req.body.name,
        date: dategenerater(),
        month:require('../jshelpers/monthnamegenereater')(date.getMonth()),
        year:date.getFullYear(),
        type:"crebit"
    })
    yearly.create({
        tag:req.user.username,
        ammount:req.body.amount,
        category:"cerbittsss amms",
        name:req.body.name,
        date: dategenerater(),
        year:date.getFullYear(),
        type:"cerbit"
    })

    res.redirect("/home");
})
module.exports = Router;