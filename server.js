require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express(); 
const fileUpload = require("express-fileupload");
// IMPORTAMOS
const {leoUsers} = require("./funcions.js")
const {
    paxinaCopia,
    paxinaOutra,
    paxinaLogueo
} = require("./paxinas.js")
// USAMOS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(fileUpload());
// Accedo o arquivo estático
const carpetaStatic = path.join(__dirname, "static/");
const carpetaStatic2 = path.join(__dirname, "static/views/");
app.use(express.static(carpetaStatic));

// RUTAS MEDIANTE END-POINTS
app.get("/outra",paxinaOutra)
app.get("/copia",paxinaCopia)

app.post('/logueo',leoUsers,paxinaLogueo)

//START SERVER
app.listen(5000, function() {
    console.log("Server running");
  });