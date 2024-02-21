const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('API Home');
});

// Define routes
router.get('/home', (req, res) => {
  res.send('API Home');
});
// More routes can be added here

module.exports = router;