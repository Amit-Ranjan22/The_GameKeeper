const express = require('express')
const router = express.Router();

//importing getProducts from controllers
const { getProducts } = require('../controllers/productController')

//setting route to get all products
router.route('/products').get(getProducts);

module.exports = router;