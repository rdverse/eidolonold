const express = require("express");
//to execute passportfile
const mongoose = require("mongoose");
const keys = require("./config/key");
require("./usermodel/user");

mongoose.connect(keys.mongouri);

const app = express();

require("./routes/authroutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//ass
