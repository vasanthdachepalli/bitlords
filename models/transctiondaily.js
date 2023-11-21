const mongoose = require("mongoose");
const transction = new mongoose.Schema({
    tag:String,
    ammount:Number,
    name:String,
    date:String,
    category:String
});
const model = new mongoose.model("transtion_daily",transction);
module.exports = model;