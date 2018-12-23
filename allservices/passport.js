const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/key.js");

//not requring mongoose a s a function as it might have issues with multiple users
//require("../usermodel/user");

//initialize the user with' google_strategy and passport helps us to initiate the process
//console.developers.google.com
//created project "emailproject"
//client ID:
//client Secret:
//callback url is the link for authentication
//in redirect uri- enter localhost:5000/auth/google/callback

//userprof object is a model class now, we can use this a model instance
const userprof = mongoose.model("userprof");
//serialize cookie with mongo id
passport.serializeUser((user, done) => {
  //this id is not profile id
  done(null, user.id);
});
//turn cookie back into user
passport.deserializeUser((id, done) => {
  userprof.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GoogleClientID,
      clientSecret: keys.GoogleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //create a promise
      userprof.findOne({ googleID: profile.id }).then(userexists => {
        if (userexits) {
          done(null, userexits);
          //sthere is already a user recorded
        } else {
          //user doesnt exist
          //create a new user and save it in mongodb
          new userprof({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
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
