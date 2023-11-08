const express = require("express");
const user = require("../models/catoregywisedaily");
const Router = express.Router();
const transtiondata = require('../models/transctiondaily');
const salarydata = require('../models/userdata');
Router.get("/",function(req,res){
    console.log(req.user);
salarydata.findOne({tag:req.user.username})
.then(doc =>{
   transtiondata.find({tag:req.user.username})
   .then(records =>{
    console.log(doc);
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
  user.countDocuments({tag:req.user.username,date:date.getDate()})
  .then(count=>{
    if(count === 0){
        user.create(
            {
                tag:req.user.username,
    Shopping:0,
    Entertainment:0,
    Medical:0,
    Food:0,
    others:0,
    date: date.getDate(),
    monthnumber:date.getMonth(),
    total:0
            }
        )
    }
  })
  .catch(err =>{
    console.log(err);
   })

   user.findOne({tag:req.user.username,date:date.getDate()})
   .then(doc =>{
    category = req.user.category
    user.findOneAndUpdate({tag:req.user.username,date:date.getDate()},{total:(doc.total + req.body.amount),[category]:(doc[category] + req.body.amount)})
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
    salarydata.findOne({tag:req.user.username})
    .then(doc =>{
        console.log(doc.balance- req.body.amount)
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
        date: date.getDate()
    })
    res.redirect("/home");
})
module.exports = Router;