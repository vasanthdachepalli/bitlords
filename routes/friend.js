const { type } = require('os');
const friend = require('../models/friends_list');
const friend_req = require('../models/friends_request');

const express = require('express');
const Router = express.Router();
Router.get('/',async function(req,res){

    
    const doc = await friend_req.find({friend_reciever:req.user.username})
    const doc1 = await friend.find({tag:req.user.username});



res.render('friend',{
    friend:doc1,
    friend_req:doc
});
})

Router.get('/addfriend',function(req,res){
    if(req.query.type == '1'){
     friend.create({
        tag:req.user.username,
        friend_id:req.query.friend
     })
     friend.create({
        tag:req.query.friend,
        friend_id:req.user.username
     })


    }
    friend_req.deleteOne({friend_sender:req.query.friend,friend_reciever:req.user.username})
    .then(()=>{
        console.log("deleted")
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect('/friend');
})
Router.post('/add', function(req,res){
friend_req.create({
    friend_sender:req.user.username,
    friend_reciever:req.body.username

})
res.redirect('/friend');
})
module.exports = Router