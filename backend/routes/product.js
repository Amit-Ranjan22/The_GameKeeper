const express = require('express')
const router = express.Router();

//importing getProducts from controllers
const { getProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

const { isAuthenticatedUser } = require('../middlewares/auth');

//setting route to get all products
router.route('/products').get(getProducts);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, newProduct);

router.route('/admin/product/:id')
    .put(isAuthenticatedUser, updateProduct)
    .delete(isAuthenticatedUser, deleteProduct);

module.exports = router;