const daily = require('../models/catoregywisedaily');
const express = require('express');
const Router = express.Router();
const month = require('../models/cateregywisemonthly');
const year = require('../models/cateregywiseyearly');
const week = require('../models/cateregywiseweekly');
Router.use("/api",require("../api/visual_api"))
Router.get("/",function(req,res){
daily.find({tag:req.user.username})
.then(doc =>{
month.find({tag:req.user.username})
.then(doc1 =>{
year.find({tag:req.user.username})
.then(doc2 =>{
 week.find({tag:req.user.username})  
.then(doc3=>{

    res.render('visualizer',{
        daily:doc,
        month:doc1,
        year:doc2,
        week:doc3
    })
}) 


})
.catch((err)=>{
    console.log(err)
});

})
.catch((err)=>{
    console.log(err)
});
   
})
.catch((err)=>{
    console.log(err)
});

})
module.exports = Router;