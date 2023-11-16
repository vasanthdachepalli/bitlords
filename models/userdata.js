const mongoose = require("mongoose");
const dataschema = new mongoose.Schema({

    tag:String,
    email:String,
    phoneNumber:Number,
    gender:String,
    display_Name:{type:String,unique:true},
    salary:Number,
    balance:Number,
    saving:Number,
    monthnumber:Number
});

const model = new mongoose.model("usersalarydata",dataschema);

module.exports = model;