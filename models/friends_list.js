const mongoose = require('mongoose');
const friend_schema = new mongoose.Schema({
    tag:String,
    friend_name:String,
    friend_id:String
})
const model = new mongoose.model('friends_list',friend_schema);
module.exports = model;