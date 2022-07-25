const { v4: uuidv4 } = require('uuid'); //genera un ID unico > npm install uuid -s
const fs = require('fs');
const path = require('path');

const productListPath = path.resolve(__dirname, '../database/products.json');
const productsList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));


let productController = {

  cart: (req, res) => {
    res.render("products/productCart.ejs");
  },
  details: (req, res) => {
    res.render("products/productDetail", {
      products: productsList
    });
  },
  add: (req, res) => {
    res.render("products/productAdd.ejs");
  },

  create: (req, res) => {
    let newProduct= req.body;
    console.log (req.body)
    newProduct.id = uuidv4(); // el ID no viene del formulario, debe crearse
    productsList.push (newProduct)
    res.redirect ("products/productDetail")
  },

  edit: (req, res) => {
    res.render("products/productEdit.ejs");
  },  
}

module.exports = productController;