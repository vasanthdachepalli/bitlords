const mongoose = require('mongoose');
const weekSchema = new mongoose.Schema({

    tag:String,
    Shopping:Number,
    Entertainment:Number,
    Medical:Number,
    Food:Number,
    others:Number,
    total:Number,
    month:String,
    year:Number,
    startdate:String,
    enddate:String

})

const model = new mongoose.model('weeklydate',weekSchema);
module.exports = model;

