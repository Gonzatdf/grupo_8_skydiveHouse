const { v4: uuidv4 } = require("uuid"); //genera un ID unico > npm install uuid -s
const fs = require("fs");
const path = require("path");
const { platform } = require("os");

const productListPath = path.resolve(__dirname, "../database/products.json");
const productsList = JSON.parse(fs.readFileSync(productListPath, "utf8"));

let productController = {
  cart: (req, res) => {
    res.render("products/productCart");
  },

  details: (req, res) => {
    res.render("products/productDetail", {
      products: productsList,
    });
  },
  getProductById: (req, res) => {
    let id = req.params.id;
    let product = productsList.find((product) => product.id == id);
    if (typeof product !== "undefined") {
      res.render("products/productById", {
        product,
      });
    } else {
      res.status(404).render("notFound.ejs");
    }
  },

  createView: (req, res) => {
    res.render("products/productCreate.ejs");
  },

  create: (req, res) => {
    let newProduct = req.body;
    let image = req.file.filename;
    newProduct.id = uuidv4(); // el ID no viene del formulario, debe crearse
    newProduct.image = image;
    productsList.push(newProduct);
    fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));
    res.redirect("/products");
  },

  editView: (req, res) => {
    let id = req.params.id;
    let product = productsList.find((product) => product.id == id);
    if (typeof product !== "undefined") {
      res.render("products/productEdit.ejs", { product });
    } else {
      res.status(404).render("notFound.ejs");
    }
  },

  updateProduct: (req, res) => {
    let id = req.params.id;
    let editProduct = req.body;
    editProduct.id = id;
    console.log(req.body);
    console.log(editProduct);
    for (let index = 0; index < productsList.length; index++) {
        if (productsList[index].id == id) {
          productsList[index] = editProduct;
        }
    }    
    fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));

    res.redirect("/products");
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

    res.redirect("/products");
  },
};

module.exports = productController;
