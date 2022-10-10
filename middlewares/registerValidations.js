
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
    }),

    body ("fullName").custom((value, {req}) => {

        let fullName = req.body.fullName;

        if(fullName.length < 2){
            throw new Error ("Ingresar al menos 2 caracteres");
        }
        return true;

    }),

    body ("pass").custom((value, {req}) => {

        let pass = req.body.pass;

        if(!pass.match(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡"'\-_#!%&()=¿]){1})\S{8,}$/)){
            throw new Error ("Ingresar al menos 8 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 número y 1 carácter especial");
        }

        return true;

    })
]

module.exports = registerValidations;