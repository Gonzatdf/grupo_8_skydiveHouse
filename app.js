const express = require('express');
const app = express();

app.use(express.static('public'));
const path = require ("path");


app.get ('/', (req,res) => {
    res.sendFile (path.resolve(__dirname, "views/index.html"))
});




app.listen (5000, () => console.log ("http://localhost:5000/"))