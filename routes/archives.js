//const { request } = require("http");

const express = require('express');
const Router = express.Router();
const daily = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const weekly = require('../models/cateregywiseweekly');
const yearly = require('../models/cateregywiseyearly');
const weekgener = require('../jshelpers/weekstartandendgenerater');
const monthgener = require('../jshelpers/monthnamegenereater');


Router.get('/',async function(req,res){
    let date = new Date();

    try{
     let doc1 =await daily.find({tag:req.user.username});
     let doc2 =await weekly.find({tag:req.user.username});
     let doc3 =await yearly.find({tag:req.user.username});
     let doc4 =await monthly.find({tag:req.user.username});

     res.render('archives',{
        daily:doc1,
        weekly:doc2,
        monthly:doc4,
        yearly:doc3
     })


    }
    catch(err){

        console.log(err);
    }

  


})

Router.use('/data',require('../api/tablegeneraters'));
module.exports = Router;
