const user = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const weekly = require('../models/cateregywiseweekly');
const weekgenerater = require('../jshelpers/weekstartandendgenerater');

const dategenerater = require('../api/dategenerater');
const monthgenerator = require('../jshelpers/monthnamegenereater');

module.exports = function(req,res,next){
    const date = new Date();
     const week = weekgenerater(date);
    user.countDocuments({tag:{ $eq:req.user.username},date:{ $eq:dategenerater()}})
    .then(count=>{
        console.log(count)
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

     
     weekly.countDocuments({tag:{ $eq:req.user.username},startdate:{ $eq:week.monday}})
     .then(count =>{
        if(count == 0){
           weekly.create({
            tag:req.user.username,
            Shopping:0,
            Entertainment:0,
            Medical:0,
            Food:0,
            others:0,
            total:0,
            startdate:week.monday,
            enddate:week.sunday,
            month:date.getMonth(),
            year:date.getFullYear()
           })

        }
     })
     .catch(err =>{
        console.log(err);
       })

    monthly.countDocuments({tag:{ $eq:req.user.username},month:{ $eq:monthgenerator(date.getMonth())}})
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
    yearly.countDocuments({tag:{ $eq:req.user.username},year:{ $eq:date.getFullYear()}})
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