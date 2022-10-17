const express = require("express");
const app = express();
const session = require("express-session");
const userLoggedMid = require("./middlewares/userLoggedMid");
const path = require("path");
const methodOverride = require('method-override'); // para poder utilizar los formularios con PUT

const PORT = process.env.PORT || 5000
const mainRoutes = require("./routes/mainRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");


const usersApiRoutes = require('./routes/api/usersApiRoutes');
const productsApiRoutes = require('./routes/api/productsApiRoutes');

const cors = require("cors");



app.set ("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Shh..",
  resave: false,
  saveUninitialized: false,

}));

app.use(userLoggedMid); // debe ir despues del session

app.use(express.urlencoded({ extended: true })); // capturar la info informacion enviada en un formulario por post
app.use(express.json());//para aclarar que queremos la info guarada en un objeto y convertir a JSON
app.use(methodOverride('_method'));

app.use("/", mainRoutes);
app.use("/products", productRoutes);

app.use("/users", userRoutes);

app.use('/api/users', usersApiRoutes); 
app.use('/api/products', productsApiRoutes);

app.use(cors());

app.use ((req,res,next) => {
    res.status (404).render("notFound.ejs");
  });

  
app.listen(PORT, () => console.log("http://localhost:" + PORT));
