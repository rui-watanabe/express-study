'use strict';

const express = require('express');
const router = express.Router();
const os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({loading: os.loadavg() })
});

module.exports = router;
