const transtion_daily = require('../models/transctiondaily');
const date = require('../api/dategenerater');
module.exports = function(req,res,next){
transtion_daily.deleteMany({date:{$ne : date()}})
.then(()=>{
    console.log('deleted successfully');
})
.catch((err)=>{
    console.log(err);
})
next()
}