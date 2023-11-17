const express = require('express');
const Router = express.Router();
const user_base = require('../models/userdata');
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

app.post('/addNewMember',async function(req,res){
const frienddata  = await user_base.findOne({display_Name :req.body.member})
group_data.create({
    tag:frienddata.tag,
    display_Name:req.body.member,
    Groupname:req.query.groupname,
    powerlevel:'0',
})
group_data.find({Groupname:req.query.groupname,tag:{$ne:frienddata.tag}})
.then(doc =>{
     doc.forEach(element => {
         members_data({
            

         })

     });
})


})
module.exports = Router;