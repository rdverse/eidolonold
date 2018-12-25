const express = require("express");
const mongoose = require("mongoose");
//for cookies
//const CookieSession = require("cookie-session");
const passport = require("passport");
//passport for keeping record of user session
const keys = require("./config/key");
require("./usermodel/user");
//to execute passportfile
require("./allservices/passport");

mongoose.connect(keys.mongouri);

const app = express();

app.use(
  CookieSession({
    //7 days passed in terms of milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //can include multiple keys
    keys: [keys.CookieKey]
  })
);

//for using cookies
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authroutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//ass
