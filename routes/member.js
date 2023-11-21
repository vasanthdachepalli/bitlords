const express = require('express');
const Router = express.Router();
const group_data = require('../models/groupsSchema');
const members_data = require('../models/group_members_data');
Router.get('/',async function(req,res){
    const member_names = await  group_data.find({Groupname:req.query.groupname})
    console.log(member_names);
group_data.findOne({tag:req.user.username,Groupname:req.query.groupname})
.populate('members')
.exec()
.then(doc =>{
   
    res.render('member',{
        group:doc,
        member:member_names
    
    })
})
})
module.exports = Router;