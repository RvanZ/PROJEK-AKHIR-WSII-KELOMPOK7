// routes/saleRoutes.js
const express = require('express');
const router = express.Router();
const saleController = require('../controller/barangController');

// Create
router.post('/sales', saleController.createSale);

// Read
router.get('/sales', saleController.getAllSales);
router.get('/sales/:id', saleController.getSaleById);

// Update
router.put('/sales/:id', saleController.updateSale);

// Delete
router.delete('/sales/:id', saleController.deleteSale);

module.exports = router;
