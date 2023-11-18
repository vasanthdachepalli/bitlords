const mongoose = require('mongoose');
const Member_schema = new mongoose.Schema({
    friend:String,
    friend_tag:String,
    amount_taken:Number,
    amount_given:Number,
    tag:String,
    Groupname:String
})
const model = new mongoose.model('Members',Member_schema);
module.exports = model;