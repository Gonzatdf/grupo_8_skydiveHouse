const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000

app.use(express.static("public"));
app.set ("view engine", "ejs");

const mainRoutes = require("./routes/mainRoutes.js");
app.use("/", mainRoutes);

const productDetailRoutes = require("./routes/productDetailRoutes.js");
app.get("/productDetail", productDetailRoutes);

const productCartRoutes = require("./routes/productCartRoutes.js");
app.get("/productCart", productCartRoutes);

const registerRoutes = require("./routes/registerRoutes.js");
app.get("/register", registerRoutes);

const loginRoutes = require("./routes/loginRoutes.js");
app.get("/login", loginRoutes);

app.listen(PORT, () => console.log("http://localhost:" + PORT));
