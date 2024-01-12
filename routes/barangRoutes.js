const express = require('express');
const router = express.Router();
const barangController = require('../controller/barangController');

// Create a new barang
router.post('/', barangController.create);

// Get all barang
router.get('/', barangController.getAll);

// Get a specific barang by ID
router.get('/:id', barangController.getById);

// Update a specific barang by ID
router.put('/:id', barangController.update);

// Delete a specific barang by ID
router.delete('/:id', barangController.delete);

module.exports = router;
