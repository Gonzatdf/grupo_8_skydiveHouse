const path = require("path")
const {body} = require ("express-validator")

const createProductValidation = [
    body("product_name").notEmpty().withMessage ("Ingresar el nombre del producto"),
    body("description").notEmpty().withMessage ("Ingresar una descripcion"),
    body("price").notEmpty().withMessage ("Definir un precio").bail().isInt().withMessage ("Completar con numeros enteros"),
    body ("image").custom((value, {req}) => {
        let file = req.file 
        let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"]               
        if (!file) {
            throw new Error ("Subir una imagen de producto")
        }else{
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error ("Las extensiones permitidas son jpg, png y gif")
            }
        }
        return true;
}),

body("product_name").custom((value, {req}) => {

    let nombreProducto = value;

    if(nombreProducto.length < 5){
        throw new Error ("Ingresar al menos 5 caracteres");
    }
    
    return true;
}),

body("description").custom((value, {req}) => {

    let descripcion = value;

    if(descripcion.length < 20){
        throw new Error ("Ingresar al menos 20 caracteres");
    }

    return true;
})
]

module.exports = createProductValidation;