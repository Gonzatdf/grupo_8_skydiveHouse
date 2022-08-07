const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const userController = require("../controllers/userController.js");
const upload = require("../middlewares/multer");
// const path = require ("path");
const RegisterValidation = require ("../middlewares/RegisterValidations");


// const storage = multer.diskStorage({
//     destination:(req,file, cb) => {
//         cb (null, "./public/img/uploads/avatars", );
//     },
//     filename:(req,file, cb) =>{
//         let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
//         cb (null, fileName)
//     }
// })
// const uploadFile = multer ({storage})



router.get ("/login", userController.login);

router.get ("/register", userController.register);

router.post ("/register", upload.single ("avatar"), RegisterValidation, userController.processRegister);

module.exports = router;