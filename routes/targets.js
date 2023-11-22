const data = require("../models/user_savings");
const target = require("../models/targets");
const express = require('express')
const Router = express.Router();
Router.get('/',function(req,res){
    data.countDocuments({tag:req.user.username})
    .then(count =>{
        if(count == 0){
            data.create({
                tag:req.user.username,
                saving:0,
                savingNeed:0
            })
        }
    })
    data.findOne({tag:req.user.username})
    .populate('targets')
    .exec()
    .then(doc =>{
        res.render('targets',{
            user:doc
        });
    })
})

Router.post('/add',async function(req,res){
  const doc =await target.create({
    targetName:req.body.target ,
    targetAmount:req.body.amount
  })

  await data.findOneAndUpdate({tag:req.user.username},{$push:{targets:doc._id},$inc:{savingNeed:parseInt(req.body.amount,10)}})
  res.redirect('/targets');
})
Router.get('/success',async function(req,res){
    const doc = await target.findOne({_id :req.query.id});

    let amm = -1 *parseInt(doc.targetAmount,10);
    let data1 = require('../models/achievedtargets');
    let date = require('../api/dategenerater')();
     const doc2 = await data1.create({
        targetName:doc.targetName,
    targetAmount:doc.targetAmount,
    date:date
    });
    await data.findOneAndUpdate({tag:req.user.username},{$push:{success:doc2._id},$inc:{savingNeed:amm,saving:amm}})

    await target.deleteMany({_id :req.query.id})
    res.redirect('/targets');
})

Router.get('/remove',async (req,res)=>{
    const doc = await target.findOne({_id :req.query.id});
    await target.deleteMany({_id :req.query.id})
    let amm = -1 *parseInt(doc.targetAmount,10);
    await data.findOneAndUpdate({tag:req.user.username},{$inc:{savingNeed:parseInt(amm,10)}})
    
    res.redirect('/targets');
})
module.exports = Router;