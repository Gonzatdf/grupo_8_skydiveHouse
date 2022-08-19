//crear-guardar usuario - done en controller
//buscar el usuario que se quiere loggear por email
//buscar el usuario que se quiere loggear por ID
//editar la informacion del user
//eliminar usuario del json-DB

const fs = require("fs");
// const path = require("path");
// const express = require("express");
const upload = require("../middlewares/multerUser");

const {selectFields } = require("express-validator/src/select-fields")


const User = {
    fileName: "./database/users.json",

    create: function(userData) {
        //guardar en json (done)
    },

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound
    },
    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound
    },
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id); // devuelve todos los usuarios menos el que coincida con el ID
        fs.writeFileSync(this.fileName, JSON.stingify (finalUsers, null, 2));
    }

}

module.exports = User;