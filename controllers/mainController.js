const { application } = require("express");


let mainController = {
    index: (req, res) => {
        res.render("index");
      }
}

module.exports = mainController;