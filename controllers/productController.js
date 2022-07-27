const { v4: uuidv4 } = require('uuid'); //genera un ID unico > npm install uuid -s
const fs = require('fs');
const path = require('path');
const { platform } = require('os');

const productListPath = path.resolve(__dirname, '../database/products.json');
const productsList = JSON.parse(fs.readFileSync(productListPath, 'utf8'));


let productController = {

  cart: (req, res) => {
    res.render("products/productCart");
  },

  details: (req, res) => {
    res.render("products/productDetail", {
      products: productsList
    });
  },
  getProductById: (req, res) => {
      let id = req.params.id;
      let product = productsList.find (product => product.id == id)
    res.render("products/productById", {
      product});
  },

  createView: (req, res) => {
    res.render("products/productCreate.ejs");
  },

  create: (req, res) => {
    let newProduct= req.body;
    console.log (newProduct)
    newProduct.id = uuidv4(); // el ID no viene del formulario, debe crearse
    productsList.push (newProduct)
    fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));
    res.redirect ("/products")
  },

  edit: (req, res) => {
    let id = req.params.id;
    let product = productsList.find(product => product.id == id);
    res.render('products/productEdit.ejs', {product});
  },  

  updateProduct: (req, res) => {
    let id = req.params.id;
    let editProduct = req.body;
    editProduct.id = id;
    for (let index = 0; index < productsList.length; index++) {
      const element = productsList[index];
        if (element == id) {
          productsList[index] = editProduct;
        }
    }    
    fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));

    res.redirect('/products');
  },

  deleteProduct: (req, res) => { 
    let id = req.params.id;
    for (let index = 0; index < productsList.length; index++) {
        const element = productsList[index];
        if (element.id == id) {
            productsList.splice(index, 1);
        }
    }
    fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));

    res.redirect('/products');
}
}

module.exports = productController;