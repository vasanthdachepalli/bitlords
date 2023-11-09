const mongoose = require('mongoose');
const catoregywisedaikyschema = new mongoose.Schema({
    tag:String,
    Shopping:Number,
    Entertainment:Number,
    Medical:Number,
    Food:Number,
    others:Number,
    date:String,
    monthnumber:String,
    total:Number
})
const model = new mongoose.model('catogerywisedaily',catoregywisedaikyschema);
module.exports = model;