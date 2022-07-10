let productController = {

  cart: (req, res) => {
    res.render("products/productCart.ejs");
  },
  details: (req, res) => {
    res.render("products/productDetail");
  },
  add: (req, res) => {
    res.render("products/productAdd.ejs");
  },
  edit: (req, res) => {
    res.render("products/productEdit.ejs");
  },  
}

module.exports = productController;