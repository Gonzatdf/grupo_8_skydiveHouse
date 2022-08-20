const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const userController = require("../controllers/userController.js");
const upload = require("../middlewares/multerUser");
const alreadyLoggedMid = require("../middlewares/alreadyLoggedMid");
const authMid = require("../middlewares/authMid"); 

const registerValidation = require ("../middlewares/RegisterValidations");

router.get ("/login", alreadyLoggedMid, userController.login);

router.post ("/login", userController.loginProcess);

router.get ("/register", alreadyLoggedMid, userController.register);

router.post ("/register", upload.single ("avatar"), registerValidation, userController.processRegister);

//Perfil de usuario
router.get ("/profile", authMid, userController.profileView);

//Log out
router.get ("/logout", userController.logout);

module.exports = router;