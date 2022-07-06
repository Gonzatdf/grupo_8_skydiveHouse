const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const productDetailController = require("../controllers/productDetailController.js");
 
router.get ("/productDetail", productDetailController.view);

module.exports = router;