const mongoose = require('mongoose');
const remainderSchema = new mongoose.Schema({
    tag:String,
    Friendname:String,
    groupname:String,

})
const model = new mongoose.model('remainderForPayments',remainderSchema);
module.exports = model;