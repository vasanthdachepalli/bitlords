const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    tag:String,
    company:String
});
const model = new mongoose.model('company',companySchema);
module.exports = model;