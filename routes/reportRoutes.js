const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.post('/', reportController.createReport);
router.put('/:reportId/resolve', reportController.resolveReport);

module.exports = router;