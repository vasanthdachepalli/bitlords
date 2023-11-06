const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userschema = new mongoose.Schema({
    email:String,
    password:String
});
userschema.plugin(passportLocalMongoose);
const model = new mongoose.model("user_data",userschema);
module.exports = model;