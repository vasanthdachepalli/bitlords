const express = require('express');

const Router = new express.Router();
Router.get('/',function(req,res){
    res.render('market');
})
module.exports = Router;