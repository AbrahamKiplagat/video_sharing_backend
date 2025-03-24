const Playlist = require('../models/playlist.model');

exports.createPlaylist = async (req, res) => {
  try {
    const playlist = new Playlist({
      ...req.body,
      user_id: req.user.id
    });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addVideoToPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndUpdate(
      req.params.playlistId,
      { $addToSet: { videos: req.body.videoId } },
      { new: true }
    );
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};