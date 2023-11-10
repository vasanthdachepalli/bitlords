const user = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const date = new Date();
const dategenerater = require('../api/dategenerater');
const monthgenerator = require('../jshelpers/monthnamegenereater');
module.exports = function(req,res,next){

    user.countDocuments({tag:req.user.username,date:dategenerater()})
    .then(count=>{
      if(count == 0){
          user.create(
              {
                  tag:req.user.username,
      Shopping:0,
      Entertainment:0,
      Medical:0,
      Food:0,
      others:0,
      date: dategenerater(),
      monthnumber:date.getMonth(),
      total:0
              }
          )
          console.log("check 6")
      }
    })
    .catch(err =>{
      console.log(err);
     })

     
    monthly.countDocuments({tag:req.user.username,month:monthgenerator(date.getMonth())})
    .then(count =>{
        if(count == 0){
            monthly.create({
                tag: req.user.username,
                Shopping:0,
                Entertainment:0,
                Medical:0,
                Food:0,
                others:0,
                total:0,
                month:monthgenerator(date.getMonth()),
                year:date.getFullYear()
            })

        }
    })
    .catch(err=>{
        console.log(err);
    })
    yearly.countDocuments({tag:req.user.username,year:date.getFullYear()})
    .then(count=>{
        if(count == 0){
            yearly.create({
                tag: req.user.username,
                Shopping:0,
                Entertainment:0,
                Medical:0,
                Food:0,
                others:0,
                total:0,
                year:date.getFullYear()
            })
        }
    })
    .catch(err=>{
        console.log(err);
    })
    next()
}