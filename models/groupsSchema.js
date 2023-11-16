const mongoose = require('mongoose');
const Groups_schema = new mongoose.Schema({
    tag:String,
    tag_name:String,
    Groupname:String,
    powerlevel:String,
    members: [{ type: Schema.Types.ObjectId, ref: 'Members' }]
})
const model = new mongoose.model('Groups',Groups_schema);
module.exports = model;