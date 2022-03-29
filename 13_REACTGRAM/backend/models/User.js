const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
  bio: String,
});

User = mongoose.model("User", userSchema);

module.exports = User;
