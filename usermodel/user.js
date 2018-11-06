const mongoose = require("mongoose");
//every user has a schema and every schema has a collections in every model it has
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: String
});

//puts the schema into the users
mongoose.model("users", UserSchema);

//creating model class
//collection of users, and users Schema
// create a new collection called users
