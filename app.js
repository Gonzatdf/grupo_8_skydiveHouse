const express = require('express');
const path = require ("path");
const app = express();

app.use(express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname +'/views/index.html'))
});

app.get('/productCart', (req,res) => {
    res.sendFile(path.resolve(__dirname + '/views/productCart.html'))
});

app.listen (5000, () => console.log ('http://localhost:5000/'));
