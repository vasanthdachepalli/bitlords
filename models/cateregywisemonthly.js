const mongoose = require('mongoose');
const catogerywisemonthly_Schema = new mongoose.Schema({
    tag:String,
    Shopping:Number,
    Entertainment:Number,
    Medical:Number,
    Food:Number,
    others:Number,
    total:Number,
    month:String,
    year:Number,
    created_at: { type: Date, default: Date.now }

});
catogerywisemonthly_Schema.index({ created_at: 1 }, { expireAfterSeconds:  365 * 24 * 60 * 60 });
const model = new mongoose.model('categeryWiseMonthlyRecord',catogerywisemonthly_Schema);
module.exports = model;