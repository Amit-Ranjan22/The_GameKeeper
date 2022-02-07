const express = require('express')
const router = express.Router();

//importing getProducts from controllers
const { getProducts, newProduct, getSingleProduct } = require('../controllers/productController')

//setting route to get all products
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/product/new').post(newProduct);

module.exports = router;