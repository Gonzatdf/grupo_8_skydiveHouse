const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override'); // para poder utilizar los formularios con PUT

const PORT = process.env.PORT || 5000
const mainRoutes = require("./routes/mainRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");


app.set ("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());//para aclarar que queremos la info guarada en un objeto y convertir a JSON
app.use(methodOverride('_method'));

app.use("/", mainRoutes);
app.use("/products", productRoutes);
// app.use ("/productDetail", productRoutes);
// app.get("/productDetail", productRoutes); // use or get??
// app.get("/productCart", productRoutes);
// app.use("/productAdd", productRoutes);
// app.get("/productAdd", productRoutes);
// app.get("/productEdit", productRoutes);


app.get("/register", userRoutes);
app.get("/login", userRoutes);



app.use ((req,res,next) => {
    res.status (404).render("notFound.ejs");
  });
  

app.listen(PORT, () => console.log("http://localhost:" + PORT));
