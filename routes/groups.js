const express = require("express");
const Router = express.Router()
const groupdata = require("../models/groupsSchema");
const userdata = require("../models/userdata")
Router.get('/',function(req,res){
    groupdata.find({tag:req.user.username})
    .then(doc =>{
      //console.log(doc);
      res.render('groups',{
        group:doc
      })
    })
    .catch(err =>{
        console.log(err);
    })
})

Router.post('/addgroup',async function(req,res){
const userdata1 = await userdata.findOne({tag:req.user.username});
    groupdata.create({
        tag:req.user.username,
        display_Name:userdata1.display_Name,
        Groupname:req.body.groupname,
        powerlevel:'1'
    })

    res.redirect('/groups')
})
module.exports = Router;





