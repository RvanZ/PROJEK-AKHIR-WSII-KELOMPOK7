// const express = require('express');
// const router = express.Router();
// const loginController = require('../controllers/loginController');

// router.get('/login', loginController.showLoginPage);
// router.post('/login', loginController.processLogin);

// module.exports = router;

// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.post('/', async (req, res) => {
    try {
        const result = await loginController.pelangganLogin(req.body);

        if (result) {
            // Jika login berhasil, redirect ke "/home"
            res.redirect('/home-pelanggan');
        } else {
            // Handle login failure
            // res.status(401).json({ message: 'Username atau password salah' });
            res.redirect('/login?error=1');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Serve the login page for GET requests
router.get('/', (req, res) => {
    res.sendFile('login.html', { root: 'views' });
});

module.exports = router;
