const mongoose = require('mongoose');

const targetSchema = new mongoose.Schema({
 
    targetName:String,
    targetAmount:Number,
    date:String
})

const model = new mongoose.model('TargetAcheived',targetSchema);
module.exports = model;