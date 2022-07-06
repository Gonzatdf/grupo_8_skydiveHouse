const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const productCartController = require("../controllers/productCartController.js");
 
router.get ("/productCart", productCartController.view);

module.exports = router;