const transdaily = require('../models/transctiondaily');
const dategenerater = require('../api/dategenerater');
const paymentdata = require('../models/group_members_data');
const user_base = require('../models/userdata')
module.exports = async function(req,res,next){
    const docu =await paymentdata.findOne({tag:req.user.username,friend_tag:req.query.tag,Groupname:req.query.groupname});

    let amount =-1 *(parseInt(docu.amount_given,10) - parseInt(docu.amount_taken,10));
   await user_base.findOneAndUpdate({tag:req.query.tag},{$inc :{balance:amount}});
   let amount1 = parseInt(docu.amount_given,10) - parseInt(docu.amount_taken,10);
   await user_base.findOneAndUpdate({tag:req.user.username},{$inc :{balance:amount1}});
   
   const date = new Date();
   transdaily.create({
    tag:req.query.tag,
    ammount:amount,
    name:"settlement ammount",
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
        tag:req.query.tag,
        ammount:amount,
        category:req.body.category,
        name:"settlement ammount",
        date: dategenerater(),
        month:date.getMonth(),
        startingDate:weekdate.monday,
        endingDate:weekdate.sunday,
        type:"debit"
    })
    monthly.create({
        tag:req.query.tag,
        ammount:amount,
        category:req.body.category,
        name:"settlement ammount",
        date: dategenerater(),
        month:require('../jshelpers/monthnamegenereater')(date.getMonth),
        year:date.getFullYear(),
        type:"debit"
    })
    yearly.create({
        tag:req.query.tag,
        ammount:amount,
        category:req.body.category,
        name:"settlement ammount",
        date: dategenerater(),
        year:date.getFullYear(),
        type:"debit"
    })



    transdaily.create({
        tag:req.user.username,
        ammount:amount1,
        category:"cerbited amm",
        name:"settlements",
        date: dategenerater(),
        monthnumber:date.getMonth(),
        type:"crebit"
    })
    //const weekly = require('../models/transWeekly');
    //const monthly = require('../models/transMonthly');
   // const yearly = require('../models/transYearly');

    //const weekdate = require('../jshelpers/weekstartandendgenerater')(date);
    weekly.create({
        tag:req.user.username,
        ammount:amount1,
        category:"cerbited amms",
        name:"settlements",
        date: dategenerater(),
        month:date.getMonth(),
        startingDate:weekdate.monday,
        endingDate:weekdate.sunday,
        type:"crebit"
    })
    monthly.create({
        tag:req.user.username,
        ammount:amount1,
        category: "cerbited amms",
        name:"settlements",
        date: dategenerater(),
        month:require('../jshelpers/monthnamegenereater')(date.getMonth()),
        year:date.getFullYear(),
        type:"crebit"
    })
    yearly.create({
        tag:req.user.username,
        ammount:amount1,
        category:"cerbitsss ",
        name:"settlements",
        date: dategenerater(),
        year:date.getFullYear(),
        type:"cerbit"
    })



   

   await paymentdata.findOneAndUpdate({tag:req.user.username,friend_tag:req.query.tag,Groupname:req.query.groupname},{amount_given:0,amount_taken:0})
   await paymentdata.findOneAndUpdate({tag:req.query.tag,friend_tag:req.user.username,Groupname:req.query.groupname},{amount_given:0,amount_taken:0})
   next()

   
}