# O server

## O arquivo server.js

Dentro deste arquivo observamos diferentes separacións:

### Os arquivos de cabeceira

A parte da cabeceira, contén varias constantes onde chamamos ou requerimos ```cors```, ```express```,```path``` e as funcións que vou utilizar neste arquivo: 

```javascript
require('dotenv').config()
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express(); 
const fileUpload = require("express-fileupload");
```
### Funcións que importamos
Utilizamos ao longo deste arquivo:

```javascript
// IMPORTAMOS
const {leoUsers} = require("./funcions.js")
const {
    paxinaCopia,
    paxinaOutra,
    paxinaLogueo
} = require("./paxinas.js")
```

### Middlewares que usamos

Lembrar que debemos colocar os middlewares que vamos usar de maneira global

```javascript
// USAMOS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(fileUpload());

```
### Accedendo as carpetas

```javascript
// Accedo o arquivo estático
const carpetaStatic = path.join(__dirname, "static/");
const carpetaStatic2 = path.join(__dirname, "static/views/");
app.use(express.static(carpetaStatic));
```
### As rutas cas respostas dos endpoint

> Cando nos logueamos, pensando en que nos vamos loguear deberemos pensar en que debemos ter un envío da páxina ao cliente, neste caso:

Podemos observer, no seguiente código:  que temos un ```endpoint``` como '/outra' que ten dous respostas, unha para un ***POST*** e outra para un ***GET***. O método ```POST```, indica que ven dun formulario co ``endpoint`` 'outra' a través do atributo ```action```. Este exemplo viña dun exemplo:

```javascript

// RUTAS MEDIANTE END-POINTS
app.get("/outra",(req,res)=>{
    res.sendFile("eqretwer2354.html", { root: carpetaStatic2 });
})

app.post("/outra",(req, res)=>{
    console.log('que envia post: ',req.body)
    if(req.body.user == "Israel"){
        res.sendFile("eqretwer2354.html", { root: carpetaStatic2 });
    }else{
        res.send("páxina no valida")
    }
})
```
Neste exercicio, sen embargo utilizamos outro método
```javascript
// RUTAS MEDIANTE END-POINTS
app.get("/outra",paxinaOutra)
app.get("/copia",paxinaCopia)

app.post('/logueo',leoUsers,paxinaLogueo)

//START SERVER
app.listen(5000, function() {
    console.log("Server running");
  });
```