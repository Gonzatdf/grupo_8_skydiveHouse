const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const productAddController = require("../controllers/productAddController.js");

router.get ("/productAdd", productAddController.view);

module.exports = router;