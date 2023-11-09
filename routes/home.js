const express = require("express");
const user = require("../models/catoregywisedaily");
const Router = express.Router();
const transtiondata = require('../models/transctiondaily');
const salarydata = require('../models/userdata');
const dategenerater = require('../api/dategenerater');
Router.get("/",require('../controllers/deleter'),require('../controllers/healperForhomePage'),function(req,res){


salarydata.findOne({tag:req.user.username})
.then(doc =>{
   transtiondata.find({tag:req.user.username})
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
Router.post("/add",function(req,res){
  

   user.findOne({tag:req.user.username,date:dategenerater()})
   .then(doc =>{
   
    category = req.body.category;
    
    const a1 = parseInt(doc.total ,10)+ parseInt(req.body.amount,10);
    const a2 = parseInt(doc[category],10)+ parseInt(req.body.amount,10);
    console.log(a2);
    user.findOneAndUpdate({tag:req.user.username,date:dategenerater()},{total:a1,[category]:a2})
    .then(()=>{
        console.log("updated ");
    })
    .catch(err =>{
        console.log(err);
       })

   })
   .catch(err =>{
    console.log(err);
   })
    salarydata.findOne({tag:req.user.username})
    .then(doc =>{
       
        salarydata.findOneAndUpdate({tag:req.user.username},{balance:(doc.balance- req.body.amount)})
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