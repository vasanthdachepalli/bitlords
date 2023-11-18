const mongoose = require('mongoose');
const remainderSchema = new mongoose.Schema({
    tag:String,
    Friend_tag:String,
    Friendname:String,
    groupname:String,

})
const model = new mongoose.model('settlementsForPayments',remainderSchema);
module.exports = model;