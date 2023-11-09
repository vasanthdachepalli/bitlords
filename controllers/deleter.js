const transtion_daily = require('../models/transctiondaily');
const catogerywisedaily =require('../models/catoregywisedaily');
const date = require('../api/dategenerater');
const dat1 = new Date();
module.exports = function(req,res,next){
transtion_daily.deleteMany({date:{$ne : date()}})
.then(()=>{
    console.log('deleted successfully');
})
.catch((err)=>{
    console.log(err);
})

catogerywisedaily.deleteMany({monthnumber:{$ne : dat1.getMonth()}})
.then(()=>{
    console.log('deleted successfully');
})
.catch((err)=>{
    console.log(err);
})
next()
}