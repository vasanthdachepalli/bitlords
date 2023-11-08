const express = require("express");
const user = require("../models/catoregywisedaily");
const Router = express.Router();
const transtiondata = require('../models/transctiondaily');
const salarydata = require('../models/userdata');
Router.get("/",function(req,res){
    user.countDocuments({tag:req.user.username,date:date.getDate()})
    .then(count=>{
      if(count == 0){
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
          console.log("check 6")
      }
    })
    .catch(err =>{
      console.log(err);
     })


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
  

   user.findOne({tag:req.user.username,date:date.getDate()})
   .then(doc =>{
   
    category = req.body.category;
    
    const a1 = parseInt(doc.total ,10)+ parseInt(req.body.amount,10);
    const a2 = parseInt(doc[category],10)+ parseInt(req.body.amount,10);
    console.log(a2);
    user.findOneAndUpdate({tag:req.user.username,date:date.getDate()},{total:a1,[category]:a2})
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
        date: date.getDate()
    })
    res.redirect("/home");
})
module.exports = Router;