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
    type:String,
    created_at: { type: Date, default: Date.now },
});
transction.index({ created_at: 1 }, { expireAfterSeconds:  150 * 24 * 60 * 60 });
const model = new mongoose.model("transtion_weekly",transction);
module.exports = model;