const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.post('/', likeController.likeVideo);
router.get('/video/:videoId', likeController.getVideoLikes);

module.exports = router;