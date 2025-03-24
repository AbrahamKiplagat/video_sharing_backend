const Like = require('../models/like.model');

exports.likeVideo = async (req, res) => {
  try {
    const existingLike = await Like.findOne({
      user_id: req.user.id,
      video_id: req.body.video_id
    });
    
    if (existingLike) return res.status(400).json({ message: 'Video already liked' });

    const like = new Like({
      user_id: req.user.id,
      video_id: req.body.video_id
    });
    
    await like.save();
    res.status(201).json(like);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVideoLikes = async (req, res) => {
  try {
    const likes = await Like.find({ video_id: req.params.videoId })
      .populate('user_id', 'username')
      .countDocuments();
    res.json({ likes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};