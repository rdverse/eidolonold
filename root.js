const express = require("express");
const keys = require("./config/key");
const mongoose = require("mongoose");

//to execute passportfile
require("./usermodel/user");
require("./allservices/passport");

mongoose.connect(keys.mongouri);

const app = express();

require("./routes/authroutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//ass
