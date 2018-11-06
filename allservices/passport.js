const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/key.js");
//not requring mongoose a s a function as it might have issues with multiple users
const mongoose = require("mongoose");
//initialize the user with' google_strategy and passport helps us to initiate the process
//console.developers.google.com
//created project "emailproject"
//client ID:
//client Secret:
//callback url is the link for authentication
//in redirect uri- enter localhost:5000/auth/google/callback

//userprof object is a model class now, we can use this a model instance
const userprof = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //create a new user and save it in mongodb
      new userprof({ googleID: profile.id }).save();
    }
  )
);
//lol
/*
console.log("access token", accessToken);
console.log("refresh token", refreshToken);
console.log("profile-", profile);
*/
//google is the name of Strategy, options object- what do we want from user account?
//we can request pictures and contacts from google
