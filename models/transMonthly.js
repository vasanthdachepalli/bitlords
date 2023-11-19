const mongoose = require("mongoose");
const transction = new mongoose.Schema({
    tag:String,
    ammount:Number,
    name:String,
    date:String,
    category:String,
    month:String,
    year:Number,
    type:String
});
const model = new mongoose.model("transtion_monthly",transction);
module.exports = model;