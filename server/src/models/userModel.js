const mongoose = require("mongoose");

const validator = require("validator");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
