const data = require('../models/catoregywisedaily');
const express = require('express');
const app = express.Router();
const date = new Date();

app.get('/dailysingle',function(req,res){
const values1 =[];

data.findOne({tag:req.user.username,date:date.getDate()})
.then((doc)=>{
values1.push(doc.Shopping);
values1.push(doc.Entertainment);
values1.push(doc.Medical);
values1.push(doc.Food);
values1.push(doc.others);

const data1 = {values:values1};
res.json(data1);

})
.catch((err) =>{
    console.log(err);
})

})
module.exports = app;


