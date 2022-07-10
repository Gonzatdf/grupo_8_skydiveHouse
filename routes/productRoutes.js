const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const productController = require("../controllers/productController.js");

router.get ("/productCart", productController.cart);
 
router.get ("/productDetail", productController.details);

router.get ("/productAdd", productController.add);

router.get ("/productEdit", productController.edit);

module.exports = router;