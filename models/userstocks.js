const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    tag:String,
    stock:String
});
const model = new mongoose.model('stocks',stockSchema);
module.exports = model;