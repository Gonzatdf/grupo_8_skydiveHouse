const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const mainController = require("../controllers/mainController.js");
 
router.get ("/", mainController.index);

module.exports = router;