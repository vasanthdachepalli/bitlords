const transtion_daily = require('../models/transctiondaily');
const catogerywisedaily =require('../models/catoregywisedaily');
const date = require('../api/dategenerater');

module.exports = function(req,res,next){
    let dat1 = new Date();
    let month = require('../jshelpers/monthnamegenereater');
transtion_daily.deleteMany({monthnumber:{$ne :dat1.getMonth()}})
.then(()=>{
    console.log('');
})
.catch((err)=>{
    console.log(err);
})

catogerywisedaily.deleteMany({monthnumber:{$ne : dat1.getMonth()}})
.then(()=>{
    console.log('');
})
.catch((err)=>{
    console.log(err);
})
next()
}
