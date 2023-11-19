const transdaily = require('../models/transctiondaily');
const dategenerater = require('../api/dategenerater');
const paymentdata = require('../models/group_members_data');
const user_base = require('../models/userdata')
module.exports = async function(req,res,next){
    const docu =await paymentdata.findOne({tag:req.user.username,friend_tag:req.query.tag,Groupname:req.query.groupname});

    let amount =-1 * parseInt(docu.amount_given,10);
   await user_base.findOneAndUpdate({tag:req.query.tag},{$inc :{balance:amount}});
   let amount1 = parseInt(docu.amount_given,10) - parseInt(docu.amount_taken,10);
   await user_base.findOneAndUpdate({tag:req.user.username},{$inc :{balance:amount1}});
   

   transdaily.create({
    tag:req.query.tag,
    ammount:docu.amount_given,
    name:"settlement ammount",
    date:dategenerater(),
    category:"others"
   })
   await paymentdata.findOneAndUpdate({tag:req.user.username,friend_tag:req.query.tag,Groupname:req.query.groupname},{amount_given:0,amount_taken:0})
   await paymentdata.findOneAndUpdate({tag:req.query.tag,friend_tag:req.user.username,Groupname:req.query.groupname},{amount_given:0,amount_taken:0})
   next()
}