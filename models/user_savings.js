const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user_savingsSchema = new mongoose.Schema({
    tag:String,
    savingNeed:Number,
    saving:Number,
    targets:[{ type: Schema.Types.ObjectId, ref: 'Target' }]
})
const model = new mongoose.model('usersavings',user_savingsSchema)
module.exports = model;