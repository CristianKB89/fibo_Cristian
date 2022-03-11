const express = require("express");
const app = express();
const path = require('path');
const rutas = require('./routes/main.js');



/* app.use(express.static('public')); */

app.use(express.static('public'));
app.set("views engine", "ejs");
app.use('/', rutas);


app.listen(process.env.PORT || 3000,() => {
    console.log('Servidor corriendo en el puerto 3000');
});