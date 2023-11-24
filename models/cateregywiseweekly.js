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
    enddate:String,
    created_at: { type: Date, default: Date.now },

})
weekSchema.index({ created_at: 1 }, { expireAfterSeconds: 240 * 24 * 60 * 60 });
const model = new mongoose.model('weeklydate',weekSchema);
module.exports = model;