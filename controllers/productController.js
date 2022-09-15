const { v4: uuidv4 } = require("uuid"); //genera un ID unico > npm install uuid -s
const fs = require("fs");
const path = require("path");
const { platform } = require("os");
const db = require('../src/database/models');
const Product = require("../src/database/models/Product");
const sequelize = db.sequelize;

const productListPath = path.resolve(__dirname, "../database/products.json");
//const productsList = JSON.parse(fs.readFileSync(productListPath, "utf8"));
let productsList = null;
let esAdministrador = false;

let productController = {
  cart: (req, res) => {
    res.render("products/productCart");
  },

  details: (req, res) => {
    
    db.Product.findAll()
      .then(products => {

        productsList = products;

        if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
          esAdministrador = true;
        }else{
          esAdministrador = false;
        }
        res.render("products/productDetail", {
          products: productsList,
          esAdministrador: esAdministrador
        });
        
      }).catch(error => {
        console.log("Error obteniendo todos los productos", error);
      });
  },
  getProductById: (req, res) => {
    let id = req.params.id;

    db.Product.findByPk(id)
      .then(product =>{

        if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
          esAdministrador = true;
        }else{
          esAdministrador = false;
        }
    
        if (typeof product !== "undefined" && product != null) {
          res.render("products/productById", {
            product,
            esAdministrador
          });
        } else {
          res.status(404).render("notFound.ejs");
        }

      }).catch(error => {
        console.log("Error al tratar de obtener el producto con id " + id,error);
      });

  },

  createView: (req, res) => {
    if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
      res.render("products/productCreate.ejs");
    }else{
      res.redirect("/users/login");
    }
  },

  create: (req, res) => {
    let newProduct = req.body;
    let image = req.file.filename;

    db.Product.create({
      product_name: newProduct.product_name,
      description: newProduct.description,
      price: newProduct.price,
      image: image
    }).then(product =>{
      newProduct = product;
      productsList.push(newProduct);
      fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));
      res.redirect("/products");
    }).catch(error =>{
      console.log("Error al momento de crear un producto", error);
    })
    
  },

  editView: (req, res) => {
    let id = req.params.id;

    db.Product.findByPk(id)
      .then(product => {
        
        if(typeof product !== "undefined" && product != null){
          if(req.session.userLogged != undefined && req.session.userLogged.admin != undefined && req.session.userLogged.admin){
            res.render("products/productEdit.ejs", { product });
          }else{
            res.redirect("/users/login");
          }
        }else{
          res.status(404).render("notFound.ejs");
        }
      }).catch(error => {
        console.log("Error obteniendo el producto con id " + id, error);
      })
  },

  updateProduct: (req, res) => {
    let id = req.params.id;
    let editProduct = req.body;

    //Buscar producto con id en BD
    db.Product.findByPk(id)
      .then(productToEdit => {

        if (req.file == undefined){
          editProduct.image = productToEdit.image
        }else {
          editProduct.image = req.file.filename
        }

        if(typeof productToEdit !== "undefined" && productToEdit != null){
          db.Product.update({
            product_name: editProduct.product_name,
            description: editProduct.description,
            price: editProduct.price,
            image: editProduct.image,
          },{
            where:{
              id: id
            }
          }).then(product => {
            editProduct.id = id

            for (let index = 0; index < productsList.length; index++) {
                if (productsList[index].id == id) {
                  productsList[index] = editProduct;
                }
            }    
            fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));

            res.redirect("/products");
          }).catch(error =>{
            console.log("Error al intentar modificar el producto con id " + id, error);
          })
        }

      }).catch(error => {
        console.log("Error al consultar el producto con id " + id, error);
      })
  },

  deleteProduct: (req, res) => {
    let id = req.params.id;

    db.Product.findByPk(id)
      .then(product => {

        if(typeof product !== "undefined" && product != null){

          db.Product.destroy({
            where: {
              id: id
            }      
          }).then(() => {

            for (let index = 0; index < productsList.length; index++) {
              const element = productsList[index];
              if (element.id == id) {
                productsList.splice(index, 1);
              }
            }

            fs.writeFileSync(productListPath, JSON.stringify(productsList, null, 2));
        
            res.redirect("/products");
          })

        }else{
          res.status(404).render("notFound.ejs");
        }
      }).catch(error => {
        console.log("Error al consultar el producto con id " + id, error);
      })
  },
};

module.exports = productController;
