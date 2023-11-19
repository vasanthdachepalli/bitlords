const express = require('express');
const Router = express.Router();
const userbase = require('../models/userdata');
const groupdata = require('../models/groupsSchema');
Router.get("/",function(req,res){
    console.log(req.query)
    userbase.countDocuments({display_Name:req.query.name})
    .then(count1 =>{
        groupdata.countDocuments({display_Name:req.query.name,Groupname:req.query.groupname})
        .then(count2 =>{
            console.log(count1,count2)
            const yes1 = { count: '1' };
            const no1 = { count: '0' };
            if(count1 == 1 && count2 == 0){
            res.json(yes1);
         
            }else{
            res.json(no1)
            }

        })
    })
})
const rem1 = require('../models/remainderForPayments');
const rem2 = require('../models/settlementforpayments');
Router.get("/counts",async function(req,res){
let count = await rem1.countDocuments({tag:req.user.username});
let count1 = await rem2.countDocuments({tag:req.user.username});
//console.log(count,count1);
const yes1 = { count: '1' };
            const no1 = { count: '0' };
if((count+count1)== 0){
    res.json(no1)
}else
res.json(yes1)
})


Router.get("/groupcheck",async function(req,res){
    let count = await groupdata.countDocuments({Groupname:req.query.groupname});
    console.log(req.query,count)
    const yes1 = { count: '1' };
            const no1 = { count: '0' };
if((count) != 0){
    res.json(no1)
}else
res.json(yes1)
})

module.exports = Router;