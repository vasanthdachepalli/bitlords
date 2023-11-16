const mongoose = require('mongoose');
const Member_schema = new mongoose.Schema({
    friend:String,
    friend_tag:String,
    ammount_taken:Number,
    ammount_given:Number,
    group_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Groups', required: true}
})
const model = new mongoose.model('Members',Member_schema);
module.exports = model;