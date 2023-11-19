const mongoose = require("mongoose");
const transction = new mongoose.Schema({
    tag:String,
    ammount:Number,
    name:String,
    date:String,
    category:String,
    month:Number,
    startingDate:String,
    endingDate:String,
    type:String
});
const model = new mongoose.model("transtion_weekly",transction);
module.exports = model;