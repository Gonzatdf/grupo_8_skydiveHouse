const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const {validationResult} = require ("express-validator");
const bcryptjs = require("bcryptjs");
const db = require('../src/database/models');
const Product = require("../src/database/models/Product");
const sequelize = db.sequelize;

const usersListPath = path.resolve(__dirname, "../database/users.json");
const usersList = JSON.parse(fs.readFileSync(usersListPath, "utf8"));
const User = require("../models/User")

let userController = {
  
  register: (req, res) => {
    res.render("user/register.ejs");
  },

  processRegister: (req,res) => {
    //let userInDB = User.findByField("email", req.body.email);

    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(userInDB => {

      if (userInDB) {
        return res.render ("user/register.ejs", {
          errors: {
            email:{
              msg :"Este email ya esta registrado"
          }
        },
        oldData:req.body
        });
      }

      const resultValidation = validationResult (req);
      if (resultValidation.errors.length > 0) {
        return res.render ("user/register",{ errors: resultValidation.mapped(), 
        oldData: req.body}) //mapped: convertir el array a objeto
      } else {

        let newUser = req.body;
        let avatar = req.file.filename;
        let passSinCryp = req.body.pass;

        //newUser.id =  uuidv4();
        newUser.avatar = avatar;
        newUser.pass = bcryptjs.hashSync(req.body.pass,10); // encripta la contrasena

        db.User.create({
          fullname: newUser.fullName,
          email: newUser.email,
          pass: newUser.pass,
          pass_sin_cryp: passSinCryp,
          avatar: newUser.avatar, 
          admin: false
        }).then(user => {
          res.redirect("/users/login");
        }).catch(error => {
          console.log("Error al crear el usuario.", error);
        })

        /*
        usersList.push (newUser);
        fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2));
        */
      }

    }).catch(error => {
      console.log("Error al obtener el usuario con email: " + req.body.email, error);
    })
  },
  login: (req, res) => {
    res.render("user/login.ejs");
  },
  loginProcess: (req,res) => {

    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(userLogin => {

      if (userLogin) {
        let passOk = bcryptjs.compareSync(req.body.pass, userLogin.pass);
        if (passOk) {
          delete userLogin.pass;
          req.session.userLogged = userLogin;
          res.redirect("/users/profile");
        }else{
          return res.render ("user/login", {
            errors: {
              email: {
                msg: "Las credenciales no son validas"
              }
            }
            });
        }
      }else{
        return res.render ("user/login", {
        errors: {
          email: {
            msg: "Las credenciales no son validas"
          }
        }
        });
      }
    }).catch(error =>{
      console.log("Error al intenatr obtener el usuario con email " + req.body.email);
    })
  },

  profileView: (req, res) => {
        return res.render("user/profile.ejs", {
          user: req.session.userLogged});
  },

  logout: (req,res) => {
    req.session.destroy();
    return res.redirect ("/users/login")
    // req.session.userLoged = null;
    // res.redirect("/users/login");
  }

}

module.exports = userController;