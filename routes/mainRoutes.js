const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const indexController = require("../controllers/indexController.js");
 
router.get ("/", indexController.index);

module.exports = router;