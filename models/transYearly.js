const mongoose = require("mongoose");
const transction = new mongoose.Schema({
    tag:String,
    ammount:Number,
    name:String,
    date:String,
    category:String,
    year:Number,

    type:String,
    created_at: { type: Date, default: Date.now },
});
transction.index({ created_at: 1 }, { expireAfterSeconds: 5 * 365 * 24 * 60 * 60 });
const model = new mongoose.model("transtion_yearly",transction);
module.exports = model;