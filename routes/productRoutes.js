const express = require("express");
const router = express.Router(); // funcionalidad de las rutas que ofrece express
const productController = require("../controllers/productController.js");
const productValidation = require("../middlewares/productValidation")
const upload = require("../middlewares/multerProduct");

router.get ("/cart", productController.cart);

// Listado de productos (done) 
router.get ("/", productController.details);

// Formulario de creación de productos
router.get ("/create", productController.createView);

// Acción de creación, a donde se envía el formulario 
router.post ("/create", upload.single("image"),productValidation, productController.create);

// Formulario de edición de productos
router.get ("/edit/:id", productController.editView);

//Acción de edición, a donde se envía el formulario 
router.put("/edit/:id", upload.single("image"),productValidation,productController.updateProduct);

// Detalle de un producto particular por ID (deberia ir al final)
router.get('/:id', productController.getProductById);
// Route to delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;