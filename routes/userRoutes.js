const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const userController = require("../controllers/userController.js");
 
router.get ("/login", userController.login);

router.get ("/register", userController.register);

module.exports = router;