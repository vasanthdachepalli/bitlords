module.exports =async function(req,res,next){
    let dat1 = new Date();
   const userdata = require('../models/userdata');
   const data = require('../models/user_savings');
   
    userdata.find({monthnumber:dat1.getMonth()})
    .then(async doc =>{
        doc.forEach(async element => {
            await data.findOneAndUpdate({tag:element.tag},{$inc:{saving:element.balance}});
            await userdata.findOneAndUpdate({tag:element.tag},{balance:doc.salary});
        });
    })
   .catch(err =>{
    console.log(err);
   })
   
next()
}