const express = require('express')
const router = express.Router();

//importing getProducts from controllers
const { getProducts, newProduct, getSingleProduct, updateProduct } = require('../controllers/productController')

//setting route to get all products
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id').put(updateProduct);

module.exports = router;