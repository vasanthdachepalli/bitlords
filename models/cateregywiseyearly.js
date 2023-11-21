const mongoose = require('mongoose');
const catogerywiseyearly_Schema = new mongoose.Schema({
    tag:String,
    Shopping:Number,
    Entertainment:Number,
    Medical:Number,
    Food:Number,
    others:Number,
    total:Number,
    year:Number
});
const model = new mongoose.model('categeryWiseYearlyRecord',catogerywiseyearly_Schema);
module.exports = model;