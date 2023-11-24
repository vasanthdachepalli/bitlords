const express = require('express');
const stocks = require('../models/userstocks');
const company = require('../models/usercompany');
const Router =  express.Router();
Router.get('/',async function(req,res){
   let doc = await stocks.find({tag:req.user.username});
   let doc1 = await company.find({tag:req.user.username});

    res.render('market',{
        stock:doc,
        company:doc1
    });
})


Router.post('/addCrypto',async function(req,res){
    console.log(req.query);
    let count = await stocks.countDocuments({tag:req.user.username,stock:req.body.crypto})

    if(count == 0){
        stocks.create({
            tag:req.user.username,
            stock:req.body.crypto
        })
    }
    res.redirect('/market')
})

Router.post('/addStock',async function(req,res){
    let count = await company.countDocuments({tag:req.user.username,company:req.body.stock})
    if(count == 0){
        company.create({
            tag:req.user.username,
            company:req.body.stock
        })
    }
    res.redirect('/market')
})
module.exports = Router;