
// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

// Create a new order
router.post('/', orderController.createOrder);

router.get('/', orderController.getAllOrders);

// Get a specific order by ID
router.get('/:id', orderController.getOrderById);

router.put('/:id', orderController.update);

module.exports = router;
