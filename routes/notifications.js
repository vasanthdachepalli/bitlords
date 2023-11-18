const express = require('express');
const Router = express.Router();
const remainder1 = require('../models/remainderForPayments');
const remainder2 = require('../models/settlementforpayments');
Router.get('/',async function(req,res){
let doc = await remainder1.find({tag:req.user.username})
let doc1 = await remainder2.find({tag:req.user.username})
res.render('notification',{
    remainder:doc,
    settle:doc1
})
})
Router.get('/remove1',async function(req,res){
    await remainder1.deleteMany({tag:req.user.username, Friendname:req.query.Friendname,
        groupname:req.query.groupname});
        res.redirect('/member?groupname='+req.query.groupname);


})
Router.get('/remove2',require('../controllers/settlementamountadder'),require('../controllers/settlementcontroller2'),async function(req,res){
    await remainder2.deleteMany({tag:req.user.username, Friend_tag:req.query.tag,
        groupname:req.query.groupname});
        res.redirect('/member?groupname='+req.query.groupname);


})
Router.get('/remove2',async function(req,res){
    await remainder2.deleteMany({tag:req.user.username, Friend_tag:req.query.tag,
        groupname:req.query.groupname});
        res.redirect('/member?groupname='+req.query.groupname);
})



module.exports = Router;