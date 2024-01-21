
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
const {enviarToken} = require("./funcions/borrar.js")
const {
    paxinaCopia,
    paxinaOutra,
    paxinaLogueo
} = require("./paxinas.js")

//middleware
const {creacionToken} = require("./middlewares/index.js")


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

app.post("/tokenOk",(req,res)=>{
    console.log('o inicial : ',req.url)
    let mensaxe;
    if(req.headers.authorization){
        console.log('comprobo o token:',req.headers.authorization)
       mensaxe = {
        tokenOk:"token correcto"
       }
        res.send(mensaxe)
    }else{
        mensaxe = {
            tokenOk: "token no valido"
        }
        res.send(mensaxe)
    }
   
})
// RUTAS MEDIANTE END-POINTS
app.get("/outra",paxinaOutra)
app.get("/copia",(req,res,next)=>{
    console.log("req",req.headers.authorization)
    res.sendFile("dsfasd.html", { root: carpetaStatic2 });
},paxinaCopia) 

app.post('/rexistra',rexistrarUsuario)
app.post('/logueo',leoUsers,paxinaLogueo)
app.post('/omeutoken',enviarToken)
//START SERVER
app.listen(5000, function() {
    console.log("Server running");
  });