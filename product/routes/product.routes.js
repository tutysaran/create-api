const express = require('express');
const router = express.Router();
const {
  upload,
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

// Use multer upload middleware only on create route
router.post('/add', upload, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
