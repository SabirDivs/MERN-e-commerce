const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

router.get('/', getProducts);

// Add other product routes
router.post('/', (req, res) => res.json({ message: 'Create product' }));

module.exports = router;