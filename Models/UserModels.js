const mongoose = require("mongoose");
const User = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String },
});
const UserDB = mongoose.model('SeaIndia', User);

module.exports = UserDB;
