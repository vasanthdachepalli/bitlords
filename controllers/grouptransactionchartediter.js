const user_base = require('../models/userdata');
const transdaily = require('../models/transctiondaily');
const dategenerater = require('../api/dategenerater');

module.exports = async function(req,res,next){
    amount = -1 * parseFloat(req.body.totalAmount)
   await user_base.findOneAndUpdate({tag:req.user.username},{$inc :{balance:amount}});
   transdaily.create({
    tag:req.user.username,
    ammount:req.body.totalAmount,
    name:"group spitted amount paid you will return some amount after your friends return",
    date:dategenerater(),
    category:"others"
   })
   next()
}
