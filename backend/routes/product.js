const express = require('express')
const router = express.Router();

//importing getProducts from controllers
const { getProducts, newProduct } = require('../controllers/productController')

//setting route to get all products
router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);

module.exports = router;