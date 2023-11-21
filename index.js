const express = require("express");
const User = require('./models/user');
const user_id = require('./models/userdata');
const app = express();
require('dotenv').config();
const mid1 = require('./routes/home');
const mongoose = require('mongoose');
const path = require("path");
const session = require('express-session');
const passport = require("passport");
const bodyParser = require("body-parser");
const rateLimit = require('express-rate-limit');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)


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
  mongoose.connect("mongodb://127.0.0.1:27017/bitlords", {useNewUrlParser: true});
  passport.use(User.createStrategy());
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err, null));
  });
  
  passport.use(new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/login",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function(accessToken, refreshToken, profile, cb) {
     // console.log(profile);
  
      User.findOrCreate({ username: profile.id }, function (err, user) {
        return cb(err, user);

      });
    }
  ));


  app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/login",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    user_id.countDocuments({tag:{$eq:req.user.username}})
    .then(count =>{
      if(count == 0)
      res.redirect("/data");
    else
    res.redirect("/home");
    })
 
  });
  
app.use("/member",require("./routes/member"))
app.use("/groups",require("./routes/groups"));
app.use("/data",require("./routes/data_adder"));
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