const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const productController = require("../controllers/productController.js");

router.get ("/productCart", productController.cart);

// Listado de productos (in progress) 
router.get ("/productDetail", productController.details);

// Formulario de creación de productos (in progress)
router.get ("/productAdd", productController.add);

// Acción de creación, a donde se envía el formulario - POST (TBA)

// Detalle de un producto particular por ID (TBA)
//router.get('/:id', productController.getProductById);

// Formulario de edición de productos (in progress) 
router.get ("/productEdit", productController.edit);

//Acción de edición, a donde se envía el formulario (TBA)

// Route to delete a product (TBA)

module.exports = router;