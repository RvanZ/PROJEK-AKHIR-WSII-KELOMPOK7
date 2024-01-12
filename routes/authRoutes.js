// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const adminRoutes = require('./adminRoutes'); // Import the adminRoutes


const requireAdminAuth = (req, res, next) => {
    // Logika untuk memeriksa keberadaan dan kevalidan token JWT
    // ...

    // Jika token valid, lanjutkan ke rute berikutnya
    next();
};

router.use('/admin', requireAdminAuth, adminRoutes);
// Login route
router.post('/login', authController.login);

// Register route
router.post('/register', authController.register);

// // Use adminRoutes for admin-related routes
// router.use('/admin', adminRoutes);

module.exports = router;
