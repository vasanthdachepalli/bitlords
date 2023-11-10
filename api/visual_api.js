const express = require('express');
const Router = express.Router();
const daily = require('../models/catoregywisedaily');
const monthly = require('../models/cateregywisemonthly');
const yearly = require('../models/cateregywiseyearly');
const dategenerater = require('./dategenerater');
Router.get('/daily',function(req,res){

})