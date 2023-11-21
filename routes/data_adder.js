const user_data = require('../models/userdata');


const express = require('express');
const Router = express.Router();
Router.get('/',async function(req,res){
    const date = new Date();

    const doc = await user_data.countDocuments({tag:req.user.username})
    if(doc == 0){
   user_data.create({
    tag:req.user.username,
    email:"enter your data",
    phoneNumber:111111111,
    gender:"male",
  
    salary:1000000,
    balance:100000,
    saving:1000,
    monthnumber:date.getMonth()
   })}
   const data = require('../models/user_savings');
   const doc1 = await data.countDocuments({tag:req.user.username})
   if(doc1 == 0){
   data.create({
    tag:req.user.username,
    saving:0,
    savingNeed:0
})
   }
   res.render('data')
})

Router.post('/add',function(req,res){
    console.log(req.body);
    user_data.findOneAndUpdate({tag:{$eq :req.user.username}},{
        email:req.body.email,
        phoneNumber:req.body.Phone,
        gender:req.body.gender,
        display_Name:req.body.username,
       
        salary:req.body.salary,
        balance:req.body.salary,
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