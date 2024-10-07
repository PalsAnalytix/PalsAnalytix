const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  auth0ID: { type: String, required: true, unique: true },
  // Changed to match your route handler checking git hub
});

const User = mongoose.model('User', userSchema);

module.exports = User;
