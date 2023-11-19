const mongoose = require("mongoose");
const transction = new mongoose.Schema({
    tag:String,
    ammount:Number,
    name:String,
    date:String,
    category:String,
    year:Number,

    type:String
});
const model = new mongoose.model("transtion_yearly",transction);
module.exports = model;