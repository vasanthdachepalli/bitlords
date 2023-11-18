const user_base = require('../models/userdata');
const daily = require('../models/catoregywisedaily');
const weekly = require('../models/cateregywiseweekly');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const monthgenerator = require('../jshelpers/monthnamegenereater');
const weekgenereater = require('../jshelpers/weekstartandendgenerater');
const dategenerater = require('../api/dategenerater');
module.exports = function(req,res,next){
    let amount =req.body.amount[0];
    category = "others"
    daily.findOne({tag:req.user.username,date:dategenerater()})
    .then(doc =>{
    
     const a1 = parseInt(doc.total ,10)+ parseInt(amount,10);
     const a2 = parseInt(doc[category],10)+ parseInt(amount,10);
  
     daily.findOneAndUpdate({tag:req.user.username,date:dategenerater()},{total:a1,[category]:a2})
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
    const date = new Date();
    const week1 = weekgenereater(date)
   
    weekly.findOne({tag:req.user.username,startdate:week1.monday})
    .then(doc =>{
        
     
        
        const a1 = parseInt(doc.total ,10)+ parseInt(amount,10);
        const a2 = parseInt(doc[category],10)+ parseInt(amount,10);
     
        week.findOneAndUpdate({tag:req.user.username,startdate:week1.monday},{total:a1,[category]:a2})
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
    
     
     
     const a1 = parseInt(doc.total ,10)+ parseInt(amount,10);
     const a2 = parseInt(doc[category],10)+ parseInt(amount,10);
    
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
    
    
    
    const a1 = parseInt(doc.total ,10)+ parseInt(amount,10);
    const a2 = parseInt(doc[category],10)+ parseInt(amount,10);
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