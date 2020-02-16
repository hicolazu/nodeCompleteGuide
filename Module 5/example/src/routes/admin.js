const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// /admin/create-product
router.get('/create-product', (req, res) => { 
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
  const { price, product } = req.body;
  console.log(`Product: ${product} Price: ${price}`);
  res.redirect('/');
});

module.exports = router;