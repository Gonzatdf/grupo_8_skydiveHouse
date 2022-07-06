const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const registerController = require("../controllers/registerController.js");
 
router.get ("/register", registerController.view);

module.exports = router;