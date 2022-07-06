const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const loginController = require("../controllers/loginController.js");
 
router.get ("/login", loginController.view);

module.exports = router;