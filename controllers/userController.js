const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const {validationResult} = require ("express-validator");
const bcryptjs = require("bcryptjs");

const usersListPath = path.resolve(__dirname, "../database/users.json");
const usersList = JSON.parse(fs.readFileSync(usersListPath, "utf8"));
const User = require("../models/User")

let userController = {
  
  register: (req, res) => {
    res.render("user/register.ejs");
  },

  processRegister: (req,res) => {
    let userInDB = User.findByField("email", req.body.email);
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
    newUser.id =  uuidv4();
    newUser.avatar = avatar;
    newUser.pass = bcryptjs.hashSync(req.body.pass,10); // encripta la contrasena
    usersList.push (newUser);
    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2));
    res.redirect("/users/login");
    }
  },
  login: (req, res) => {
    res.render("user/login.ejs");
  },
  loginProcess: (req,res) => {
    let userLogin = User.findByField("email", req.body.email);
    if (userLogin) {
      let passOk = bcryptjs.compareSync(req.body.pass, userLogin.pass)
      if (passOk) {
        delete userLogin.pass;
        req.session.userLogged = userLogin;
        res.redirect("/users/profile");
      }
    return res.render ("user/login", {
      errors: {
        email: {
          msg: "Las credenciales no son validas"
        }
      }
      });
    }
    return res.render ("user/login", {
    errors: {
      email: {
        msg: "Email no esta registrado"
      }
    }
    });
  },

  profileView: (req, res) => {
        return res.render("user/profile.ejs", {
          user: req.session.userLogged});
  },

  logout: (req,res) => {
    req.session.destroy();
    return res.redirect ("/")
  }

}

module.exports = userController;