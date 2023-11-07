const User = require('../models/user');
require('dotenv').config();
const express = require("express");

const passport = require('passport')
const userdata = require('../models/userdata');


const app = express.Router();

const date = new Date();
app.post("/register", function(req, res){
    let name = req.body.username;
      User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err) {
          console.log(err);
    
          res.redirect("/register");
        } else {
          passport.authenticate("local")(req, res, function(){
            //create a profile data for them that can be edited by him in next page
           userdata.create({
            tag:req.body.username,
            salary:req.body.salary,
            balance:req.body.salary,
            saving:req.body.saving,
            monthnumber:date.getMonth()

           });
            res.redirect("/home");
          });
          
        }
      });
    
    });
    app.post("/login", function(req, res){

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
      res.redirect("/register");//if the password is wrong it will redirect to sign up page
    } else {
      console.log("check 1");
      passport.authenticate("local")(req, res, function(){
       
        console.log("check 2");
        res.redirect("/home");
    
      });
     
      
    }
  });

});
module.exports = app;