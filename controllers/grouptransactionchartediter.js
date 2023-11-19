const user_base = require('../models/userdata');
const transdaily = require('../models/transctiondaily');
const dategenerater = require('../api/dategenerater');

module.exports = async function(req,res,next){
    amount = -1 * parseFloat(req.body.totalAmount)
   await user_base.findOneAndUpdate({tag:req.user.username},{$inc :{balance:amount}});

   const date = new Date();
   transdaily.create({
    tag:req.user.username,
    ammount:req.body.totalAmount,
    name:"group spitted amount paid you will return some amount after your friends return",
    date:dategenerater(),
    category:"others",
    monthnumber:date.getMonth(),
    type:"debit"
   })
  
   const weekly = require('../models/transWeekly');
    const monthly = require('../models/transMonthly');
    const yearly = require('../models/transYearly');

    const weekdate = require('../jshelpers/weekstartandendgenerater')(date);
    weekly.create({
        tag:req.user.username,
        ammount:req.body.totalAmount,
        category:"others",
        name:"group spitted amount paid you will return some amount after your friends return",
        date: dategenerater(),
        month:date.getMonth(),
        startingDate:weekdate.monday,
        endingDate:weekdate.sunday,
        type:"debit"
    })
    monthly.create({
        tag:req.user.username,
        ammount:req.body.totalAmount,
        category:"others",
        name:"group spitted amount paid you will return some amount after your friends return",
        date: dategenerater(),
        month:require('../jshelpers/monthnamegenereater')(date.getMonth()),
        year:date.getFullYear(),
        type:"debit"
    })
    yearly.create({
        tag:req.user.username,
        ammount:req.body.totalAmount,
        category:"others",
        name:"group spitted amount paid you will return some amount after your friends return",
        date: dategenerater(),
        year:date.getFullYear(),
        type:"debit"
    })
   next()
}
