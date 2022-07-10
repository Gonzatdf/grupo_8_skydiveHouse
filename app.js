const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000
const mainRoutes = require("./routes/mainRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

app.set ("view engine", "ejs");

app.use(express.static("public"));

app.use("/", mainRoutes);

app.get("/productDetail", productRoutes);
app.get("/productCart", productRoutes);
app.get("/productAdd", productRoutes);
app.get("/productEdit", productRoutes);

app.get("/register", userRoutes);
app.get("/login", userRoutes);



app.listen(PORT, () => console.log("http://localhost:" + PORT));
