//const { v4: uuidv4 } = require('uuid'); //genera un ID unico
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
  edit: (req, res) => {
    res.render("products/productEdit.ejs");
  },  
}

module.exports = productController;