const Video = require('../models/video.model');

exports.uploadVideo = async (req, res) => {
  try {
    const video = new Video({
      ...req.body,
      user_id: req.user.id // Assuming authentication middleware
    });
    
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate('user_id', 'username profile_picture_url')
      .sort('-upload_date');
      
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};