const mongoose = require('mongoose');
const friendreq_schema = new mongoose.Schema({
    friend_sender:String,
    friend_reciever:String
})
const model = new mongoose.model('friendsreq_list',friendreq_schema);
module.exports = model;