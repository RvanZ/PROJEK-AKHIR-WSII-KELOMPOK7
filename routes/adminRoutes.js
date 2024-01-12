// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Admin login route
// router.post('/login', adminController.adminLogin);
router.post('/login', async (req, res) => {
    try {
        const result = await adminController.adminLogin(req.body);

        if (result) {
            // Jika login berhasil, redirect ke "/home"
            res.redirect('/dashboard-admin');
        } else {
            // Handle login failure
            res.redirect('/admin/login?error=1');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Serve the login page for GET requests
router.get('/login', (req, res) => {
    res.sendFile('admin-login.html', { root: 'views' });
});

module.exports = router;
