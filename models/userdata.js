const mongoose = require("mongoose");
const dataschema = new mongoose.Schema({

    tag:String,
    salary:Number,
    balance:Number,
    saving:Number,
    monthnumber:Number
});

const model = new mongoose.model("usersalarydata",dataschema);

module.exports = model;