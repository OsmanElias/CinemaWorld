// routes/route.js
const express = require('express');
const router = express.Router();

// Assuming you have some controller functions you've imported
const { loginUser, registerUser, dashboard } = require('../controllers/userController');

// Define routes
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/dashboard', dashboard);

// Export the router
module.exports = router;