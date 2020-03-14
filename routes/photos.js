'use strict';
const express = require('express');
const router = express.Router();

router.get('/photo', (req, res, next) => {
  res.send('Some photos');
});

module.exports = router;