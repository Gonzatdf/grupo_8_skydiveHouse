const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override'); // para poder utilizar los formularios con PUT

const PORT = process.env.PORT || 5000
const mainRoutes = require("./routes/mainRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

app.set ("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());//para aclarar que queremos la info guarada en un objeto y convertir a JSON

app.use("/", mainRoutes);
app.use(methodOverride('_method'));

app.get("/productDetail", productRoutes); // use or get??
app.get("/productCart", productRoutes);
app.get("/productAdd", productRoutes);
app.get("/productEdit", productRoutes);

app.use ("/product", productRoutes); // intento de MVC

app.get("/register", userRoutes);
app.get("/login", userRoutes);



app.listen(PORT, () => console.log("http://localhost:" + PORT));
