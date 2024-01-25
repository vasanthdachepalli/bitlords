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
    total:Number,
    created_at: { type: Date, default: Date.now },
})
catoregywisedaikyschema.index({ created_at: 1 }, { expireAfterSeconds:  28 * 24 * 60 * 60 });
const model = new mongoose.model('catogerywisedaily',catoregywisedaikyschema);
module.exports = model;