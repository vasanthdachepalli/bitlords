const express = require("express");
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