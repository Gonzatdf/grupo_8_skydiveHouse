const express = require("express");
const router = express.Router();
const productEditController = require("../controllers/productEditController.js");

router.get ("/productEdit", productEditController.view);

module.exports = router;