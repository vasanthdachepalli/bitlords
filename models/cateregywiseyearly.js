const mongoose = require('mongoose');
const catogerywiseyearly_Schema = new mongoose.Schema({
    tag:String,
    Shopping:Number,
    Entertainment:Number,
    Medical:Number,
    Food:Number,
    others:Number,
    total:Number,
    year:Number,
    created_at: { type: Date, default: Date.now },
});
catogerywiseyearly_Schema.index({ created_at: 1 }, { expireAfterSeconds: 5 * 365 * 24 * 60 * 60 });
const model = new mongoose.model('categeryWiseYearlyRecord',catogerywiseyearly_Schema);
module.exports = model;