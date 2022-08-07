const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const {validationResult} = require ("express-validator");

const usersListPath = path.resolve(__dirname, "../database/users.json");
const usersList = JSON.parse(fs.readFileSync(usersListPath, "utf8"));

let userController = {
  login: (req, res) => {
    res.render("user/login.ejs");
  },
  register: (req, res) => {
    res.render("user/register.ejs");
  },
  processRegister: (req,res) => {
    const resultValidation = validationResult (req)
    if (resultValidation.errors.length > 0) {
      return res.render ("user/register",{ errors: resultValidation.mapped(), 
      oldData: req.body}) //mapped: convertir el array a objeto
    } else {
    let newUser = req.body;
    let avatar = req.file.filename;
    newUser.id =  uuidv4();
    newUser.avatar = avatar;
    usersList.push (newUser);
    fs.writeFileSync(usersListPath, JSON.stringify(usersList, null, 2));
    res.redirect("/");
    }
  }
}

module.exports = userController;