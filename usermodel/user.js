const mongoose = require("mongoose");
//every user has a schema and every schema has a collections in every model it has

//const Schema = mongoose.Schema;
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: String
});

mongoose.model("userprof", UserSchema);
//module.exports(UserSchema)

//puts the schema into the users

//creating model class
//collection of users, and users Schema
// create a new collection called users
