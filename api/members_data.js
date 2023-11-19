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

module.exports = Router;