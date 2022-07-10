let userController = {
  login: (req, res) => {
    res.render("user/login.ejs");
  },
   register: (req, res) => {
    res.render("user/register.ejs");
  }
}

module.exports = userController;