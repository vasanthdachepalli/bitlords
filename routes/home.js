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
module.exports = Router;