//this file is no longer in use 


const transtion_daily = require('../models/transctiondaily');
const year = require('../models/cateregywiseyearly')
const week = require('../models/cateregywiseweekly');
const month = require('../models/cateregywisemonthly');

const yearTrans = require('../models/transYearly')
const monthTrans = require('../models/transMonthly');
const weekTrans = require('../models/transWeekly');
const catogerywisedaily =require('../models/catoregywisedaily');
const date = require('../api/dategenerater');

module.exports =async function(req,res,next){
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

//await week.deleteMany({year:{$ne :dat1.getFullYear()}})

//await month.deleteMany({year:{$ne: dat1.getFullYear()}})

//await year.deleteMany({year:{}})

next()
}
