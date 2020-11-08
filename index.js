// Using common js modules imports here
const express = require('express');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const  keys = require('./config/keys');


//App declaration
const app = express();


passport.use(
    new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: "/auth/google/callback"
    },

		       (accessToken, refreshToken, profile, done) => {
			   console.log('accessToken', accessToken);
			   console.log('refreshToken', refreshToken);
			   console.log('profile', profile);
			    console.log('done', done);

		       }));

//Add a route handler for the passport block
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']})
       );

//second route handler for route handler
// (similar) but passport now tries to kick back the user to the callback url
// At the callback url,we get an access token which we will use to verify the user
app.get('/auth/google/callback', passport.authenticate('google'));


// Get the environment variable port from heroku
// dev - 5000 , prod - PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT);

