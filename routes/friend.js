const { type } = require('os');
const friend = require('../models/friends_list');
const friend_req = require('../models/friends_request');
const userbase = require('../models/userdata');
const express = require('express');
const Router = express.Router();
Router.get('/',async function(req,res){

    
    const doc = await friend_req.find({friend_reciever_tag:{ $eq:req.user.username}})
    const doc1 = await friend.find({tag:{ $eq:req.user.username}});



res.render('friend',{
    friend:doc1,
    friend_req:doc
});
})

Router.get('/addfriend',async function(req,res){

    const doc = await userbase.findOne({tag:req.user.username});
    const doc1 =await userbase.findOne({display_Name:req.query.friend});
    //console.log(doc1);
    if(req.query.type == '1'){
     friend.create({
        tag:req.user.username,
        friend_name:req.query.friend,
        friend_id:doc1.tag
     })
     friend.create({
        tag:doc1.tag,
        friend_id:req.user.username,
        friend_name:doc.display_Name
     })


    }
    friend_req.deleteOne({friend_sender:{ $eq:req.query.friend},friend_reciever_tag:{ $eq:req.user.username}})
    .then(()=>{
        console.log("deleted")
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect('/friend');
})
Router.post('/add', async function(req,res){
    const doc1 =await userbase.findOne({display_Name:req.body.friend});
    const doc = await userbase.findOne({tag:req.user.username});
    //console.log(doc1);
friend_req.create({
    friend_sender_tag:req.user.username,
    friend_sender:doc.display_Name,
    friend_reciever:req.body.friend,
    friend_reciever_tag:doc1.tag

})
res.redirect('/friend');
})
module.exports = Router