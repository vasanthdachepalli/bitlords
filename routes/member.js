const express = require('express');
const Router = express.Router();
const user_base = require('../models/userdata');
const group_data = require('../models/groupsSchema');
const members_data = require('../models/group_members_data');
Router.get('/',async function(req,res){
    const member_names = await  group_data.find({Groupname:req.query.groupname})
   // console.log(member_names);
group_data.findOne({tag:req.user.username,Groupname:req.query.groupname})
.populate('members')
.exec()
.then(doc =>{
 //console.log(doc)
   
    res.render('member',{
        group:doc,
        member:member_names
    
    })
})
})

Router.post('/addNewMember',async function(req,res){
const frienddata  = await user_base.findOne({display_Name :req.body.member})
await group_data.create({
    tag:frienddata.tag,
    display_Name:req.body.member,
    Groupname:req.query.groupname,
    powerlevel:'0',
})
const friendids = await group_data.findOne({display_Name:req.body.member,Groupname:req.query.groupname})
//console.log(friendids)
 const doc = await  group_data.find({Groupname:req.query.groupname,tag:{$ne:frienddata.tag}})
 doc.forEach(async (element) => {
  const doc1 =await members_data.create({
       friend:element.display_Name,
       friend_tag:element.tag,
       tag:frienddata.tag,
       amount_taken:0,
       amount_given:0,
       Groupname:req.query.groupname
    })
   const doc2 = await members_data.create({
       friend:frienddata.display_Name,
       friend_tag:frienddata.tag,
       tag:element.tag,
       Groupname:req.query.groupname,
       amount_taken:0,
       amount_given:0,   
    })
    await group_data.findOneAndUpdate({display_Name:req.body.member,Groupname:req.query.groupname},{$push :{members:doc1._id}});
    await group_data.findOneAndUpdate({display_Name:element.display_Name,Groupname:element.Groupname},{$push:{members:doc2._id}});

}); 
await res.redirect('/member?groupname='+req.query.groupname)


})


Router.post('/makeTransaction',require('../controllers/grouptransactionadder'),require('../controllers/grouptransactionchartediter'),async function(req,res){
    //console.log(req.body);
    for(let i = 1; i < req.body.amount.length; i++){
      const doc = await user_base.findOne({display_Name:req.body.memberName[i]});
     // console.log(doc);
      await members_data.findOneAndUpdate({tag:req.user.username,friend:doc.display_Name,Groupname:req.query.groupname},{$inc: { amount_given: parseFloat(req.body.amount[i],10) }})
      await members_data.findOneAndUpdate({tag:doc.tag,friend_tag:req.user.username,Groupname:req.query.groupname},{$inc: { amount_taken: parseFloat(req.body.amount[i],10)  }})
     // console.log(await members_data.countDocuments({tag:doc.tag,friend_tag:req.user.username,Groupname:req.query.groupname}))

    }


    


    res.redirect('/member?groupname='+req.query.groupname)
})
module.exports = Router;