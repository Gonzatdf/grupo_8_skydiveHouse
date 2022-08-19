
const path = require("path")
const {body} = require ("express-validator")

const registerValidations = [
    body("fullName").notEmpty().withMessage ("Ingresar el nombre completo"),
    body("email").notEmpty().withMessage ("Ingresar un email").bail().isEmail().withMessage("Ingresar email valido"),
    body("pass").notEmpty().withMessage ("Definir una contraseña"),
    // body("confPass").notEmpty().withMessage ("Confirmar la contraseña"),
    body ("avatar").custom((value, {req}) => {
        let file = req.file 
        let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"]               
        if (!file) {
            throw new Error ("Subir una imagen de perfil")
        }else{
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ("Las extensiones permitidas son jpg, png y gif")
            }
        }
        return true;
})
]

module.exports = registerValidations;