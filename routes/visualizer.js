const daily = require('../models/catoregywisedaily');
const express = require('express');
const Router = express.Router();

Router.get("/",function(req,res){
daily.find({tag:req.user.username})
.then(doc =>{
    res.render('visualizer',{daily:doc});
})
})
module.exports = Router;