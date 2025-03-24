const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  upload_date: { type: Date, default: Date.now },
  duration: { type: Number, required: true },
  file_url: { type: String, required: true },
  thumbnail_url: String,
  views_count: { type: Number, default: 0 },
  is_public: { type: Boolean, default: true },
  status: { type: String, enum: ['published', 'pending_review', 'removed'], default: 'pending_review' }
});

module.exports = mongoose.model('Video', videoSchema);