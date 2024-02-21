const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API Home');
});

// Define more API endpoints here

module.exports = router;