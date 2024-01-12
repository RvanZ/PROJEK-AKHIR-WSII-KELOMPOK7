const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Endpoint untuk login
router.post('/login', authController.login);

// Endpoint untuk logout
router.post('/logout', authController.logout);

// Endpoint untuk pendaftaran
router.post('/register', authController.register);

module.exports = router;
