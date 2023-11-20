const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const targetSchema = new mongoose.Schema({
 
    targetName:String,
    targetAmount:Number
})

const model = new mongoose.model('Target',targetSchema);
module.exports = model;