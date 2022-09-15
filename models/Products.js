//crear-guardar producto - done en controller
//buscar el producto que se quiere crear por nombre

const fs = require("fs");
// const path = require("path");
// const express = require("express");
const upload = require("../middlewares/multerUser");

const {selectFields} = require("express-validator/src/select-fields")


const Product = {
    fileName: "./database/products.json",
    
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function(id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct.id == id);
        return productFound
    },

    findByField: function(field, text) {
        let allProducts = this.findAll();
        let productFound =allProducts.find(oneProduct => oneProduct[field] == text);
        return productFound
    },
    delete: function (id) {
        let allProducts = this.findAll();
        let finalProduct =allProducts.filter(oneProduct => oneProduct.id !== id); // devuelve todos los productos menos el que coincida con el ID
        fs.writeFileSync(this.fileName, JSON.stingify (finalProduct, null, 2));
    }

}

module.exports = Product;