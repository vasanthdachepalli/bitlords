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
    year:Number
});
const model = new mongoose.model('categeryWiseMonthlyRecord',catogerywisemonthly_Schema);
module.exports = model;