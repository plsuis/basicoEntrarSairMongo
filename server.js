
require('dotenv').config()
const url = require("url")
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express(); 
const fileUpload = require("express-fileupload");
// IMPORTAMOS
const {leoUsers} = require("./funcions.js")
const {rexistrarUsuario} =require("./funcions/index.js")

const {
    paxinaCopia,
    paxinaOutra,
    paxinaLogueo
} = require("./paxinas.js")

//middleware
const {enviarToken,tesToken} = require("./middlewares")

// USAMOS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(fileUpload());
// Accedo o arquivo estático
const carpetaStatic = path.join(__dirname, "static/");
const carpetaStatic2 = path.join(__dirname, "static/views/");
app.use(express.static(carpetaStatic));
// Creo un middleware para comprobalo token do usuario


// RUTAS MEDIANTE END-POINTS

// Pasos iniciais  no proceso de comunicación
app.post('/logueo',leoUsers,paxinaLogueo)
app.post('/omeutoken',enviarToken)

// Rexistro de usuario
app.post('/rexistra',rexistrarUsuario)

// Envío de páxinas

app.get("/outra",tesToken,paxinaOutra)
app.get("/copia",tesToken,paxinaCopia) 




//START SERVER
app.listen(5000, function() {
    console.log("Server running");
  });