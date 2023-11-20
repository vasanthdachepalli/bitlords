const user_data = require('../models/userdata');

const date = new Date();
const express = require('express');
const Router = express.Router();
Router.get('/',function(req,res){
   user_data.create({
    tag:req.user.username,
    email:"enter your data",
    phoneNumber:111111111,
    gender:"male",
    display_Name:"nickname",
    salary:1000000,
    balance:100000,
    saving:1000,
    monthnumber:date.getMonth()
   })
   const data = require('../models/user_savings');
   data.create({
    tag:req.user.username,
    saving:0,
    savingNeed:0
})
   res.render('data')
})

Router.post('/add',function(req,res){
    user_data.findOneAndUpdate({tag:{$eq :req.user.username}},{
        email:req.body.email,
        phoneNumber:req.body.phone,
        gender:req.body.gender,
       
        salary:req.body.salary,
        balance:req.body.balance,
        saving:req.body.saving
    })
    .then(()=>{
        console.log("updated successfull");
    })
    .catch((err)=>{
        console.log(err);
    })

    res.redirect('/home')
})


module.exports = Router;