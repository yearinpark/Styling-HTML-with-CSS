const path = require('path'); //added

const express = require('express');

const rootDir =require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, '..', 'views', 'shop.html'));
});

// '../'  means 'go up one level'

module.exports = router;
