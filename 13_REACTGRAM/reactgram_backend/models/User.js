const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,
});

User = mongoose.model("User", userSchema);

module.exports = User;
