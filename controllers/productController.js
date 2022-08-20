const { v4: uuidv4 } = require("uuid"); //genera un ID unico > npm install uuid -s
const fs = require("fs");
const path = require("path");
const { platform } = require("os");

const {validationResult} = require ("express-validator");
const Product = require("../models/Products")

const productListPath = path.resolve(__dirname, "../database/products.json");
const productsList = JSON.parse(fs.readFileSync(productListPath, "utf8"));
let esAdministrador = false;

let productController = {
  cart: (req, res) => {
    res.render("products/productCart");
  },

  details: (req, res) => {
    if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
      esAdministrador = true;
    }else{
      esAdministrador = false;
    }
    res.render("products/productDetail", {
      products: productsList,
      esAdministrador: esAdministrador
    });
  },
  getProductById: (req, res) => {
    let id = req.params.id;
    let product = productsList.find((product) => product.id == id);

    if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
      esAdministrador = true;
    }else{
      esAdministrador = false;
    }

    if (typeof product !== "undefined") {
      res.render("products/productById", {
        product,
        esAdministrador
      });
    } else {
      res.status(404).render("notFound.ejs");
    }
  },

  createView: (req, res) => {
    if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
      res.render("products/productCreate.ejs");
    }else{
      res.redirect("/users/login");
    }
  },

  create: (req, res) => {
    let productInDB = Product.findByField("product_name", req.body.product_name);
    if (productInDB) {
      return res.render ("products/productCreate.ejs", {
        errors: {
          product_name:{
            msg :"Este producto ya esta registrado"
        }
      },
      oldData:req.body
    });
  }

  const resultValidation = validationResult (req);
    if (resultValidation.errors.length > 0) {
      return res.render ("products/productCreate",{ errors: resultValidation.mapped(), 
      oldData: req.body}) //mapped: convertir el array a objeto
    } else {
    let newProduct = req.body;
    let image = req.file.filename;
    newProduct.id = uuidv4(); // el ID no viene del formulario, debe crearse
    newProduct.image = image;
    productsList.push(newProduct);
    fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));
    res.redirect("/products");
  }
},

  editView: (req, res) => {
    let id = req.params.id;
    let product = productsList.find((product) => product.id == id);
    if (typeof product !== "undefined") {
      if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
        res.render("products/productEdit.ejs", {product});
      }else{
        res.redirect("/users/login");
      }
    } else {
      res.status(404).render("notFound.ejs");
    }
  },

  updateProduct: (req, res) => {
        let id = req.params.id;
    //buscar producto con id en el json
    let productToEdit = productsList.find((product) => {
      return product.id == id;
    });
    let editProduct = req.body;
    editProduct.id = id

    if (req.file == undefined){
      editProduct.image = productToEdit.image
    }else {
      editProduct.image = req.file.filename
    }
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
