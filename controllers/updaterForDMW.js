const user = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const date = new Date();
const dategenerater = require('../api/dategenerater');
const monthgenerator = require('../jshelpers/monthnamegenereater');

module.exports = function(req,res,next){
    user.findOne({tag:req.user.username,date:dategenerater()})
    .then(doc =>{
    
     category = req.body.category;
     
     const a1 = parseInt(doc.total ,10)+ parseInt(req.body.amount,10);
     const a2 = parseInt(doc[category],10)+ parseInt(req.body.amount,10);
  
     user.findOneAndUpdate({tag:req.user.username,date:dategenerater()},{total:a1,[category]:a2})
     .then(()=>{
         console.log("");
     })
     .catch(err =>{
         console.log(err);
        })
 
    })
    .catch(err =>{
     console.log(err);
    })



    monthly.findOne({tag:req.user.username,month:monthgenerator(date.getMonth())})
    .then(doc =>{
    
     category = req.body.category;
     
     const a1 = parseInt(doc.total ,10)+ parseInt(req.body.amount,10);
     const a2 = parseInt(doc[category],10)+ parseInt(req.body.amount,10);
    
     monthly.findOneAndUpdate({tag:req.user.username,month:monthgenerator(date.getMonth())},{total:a1,[category]:a2})
     .then(()=>{
         console.log("");
     })
     .catch(err =>{
         console.log(err);
        })
 
    })
    .catch(err =>{
     console.log(err);
    })


 yearly.findOne({tag:req.user.username,year:date.getFullYear()})
   .then(doc =>{
    console.log(doc);
    category = req.body.category;
    
    const a1 = parseInt(doc.total ,10)+ parseInt(req.body.amount,10);
    const a2 = parseInt(doc[category],10)+ parseInt(req.body.amount,10);
    console.log(a2);
    console.log(doc[category]);
    yearly.findOneAndUpdate({tag:req.user.username,year:date.getFullYear()},{total:a1,[category]:a2})
    .then(()=>{
        console.log("updated 2");
    })
    .catch(err =>{
        console.log(err);
       })

   })
   .catch(err =>{
    console.log(err);
   })


   next();
}