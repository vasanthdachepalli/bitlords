const friend = require('../models/friends_list');
const friend_req = require('../models/friends_request');

const express = require('express');
const Router = express.Router();
Router.get('/',function(req,res){
res.render('friend');
})

Router.get('/add', function(req,res){

})
module.exports = Router