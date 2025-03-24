const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('/', playlistController.createPlaylist);
router.put('/:playlistId/add-video', playlistController.addVideoToPlaylist);

module.exports = router;