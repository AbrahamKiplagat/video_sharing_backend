const Comment = require('../models/comment.model');

exports.createComment = async (req, res) => {
  try {
    const comment = new Comment({
      ...req.body,
      user_id: req.user.id
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVideoComments = async (req, res) => {
  try {
    const comments = await Comment.find({ video_id: req.params.videoId })
      .populate('user_id', 'username profile_picture_url')
      .sort('-created_at');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};