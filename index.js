const express = require("express");
const User = require('./models/user');
const app = express();
require('dotenv').config();
const mid1 = require('./routes/home');
const mongoose = require('mongoose');
const path = require("path");
const session = require('express-session');
const passport = require("passport");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+"/assets"));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  mongoose.connect("mongodb+srv://vasanthdachepalli:Vasanth@bitlords-db.w4uecqp.mongodb.net/?retryWrites=true&w=majority");
  passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());
app.use("/api2",require("./api/friend_api"));
app.use("/friend",require("./routes/friend"));
app.use("/api1",require("./api/visual_api1"));
app.use("/api",require("./api/dailysingle"));
app.use("/home",require('./routes/home'));
app.use('/loginpage', require('./routes/user'));
//app.use('loginpage/login',require('./routes/user'));
app.get("/register", function(req, res){
    res.render("signin");
  });
  app.get("/login", function(req, res){
    res.render("login");
  });
app.get("/",function(req,res){
    res.render("signin");
})
app.use("/visualizer",require('./routes/visualizer'))
app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });