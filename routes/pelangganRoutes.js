
// pelangganRoutes.js
const express = require('express');
const router = express.Router();
const pelangganController = require('../controller/pelangganController');

router.get('/', pelangganController.getAllOrders);

module.exports = router;
