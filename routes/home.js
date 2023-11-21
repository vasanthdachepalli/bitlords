const express = require("express");
const user = require("../models/catoregywisedaily");
const Router = express.Router();
const transtiondata = require('../models/transctiondaily');
const salarydata = require('../models/userdata');
const dategenerater = require('../api/dategenerater');
Router.get("/",require('../controllers/deleter'),require('../controllers/healperForhomePage'),function(req,res){


salarydata.findOne({tag: { $eq:req.user.username }})
.then(doc =>{
   transtiondata.find({tag: { $eq:req.user.username}})
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
        date: dategenerater()
    })
    res.redirect("/home");
})
module.exports = Router;