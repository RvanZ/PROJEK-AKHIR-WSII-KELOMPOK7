// const express = require('express');
// const router = express.Router();
// const registerController = require('../controllers/registerController');

// router.get('/register', registerController.showRegisterPage);
// router.post('/register', registerController.processRegister);

// module.exports = router;

// routes/registerRoutes.js
const express = require('express');
const router = express.Router();
const registerController = require('../controller/registerController');

// Register route
router.post('/', registerController.register);

module.exports = router;