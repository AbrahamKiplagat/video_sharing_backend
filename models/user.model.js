const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  created_at: { type: Date, default: Date.now },
  last_login: Date,
  profile_picture_url: String,
  is_banned: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);