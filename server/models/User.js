const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rating: { type: Number, default: 1200 },
  matchesPlayed: { type: Number, default: 0 },
  wins: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
