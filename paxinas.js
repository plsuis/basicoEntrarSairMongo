const path = require("path");
const carpetaStatic2 = path.join(__dirname, "static/views/");

const paxinaOutra = (req,res)=>{
    res.sendFile("eqretwer2354.html", { root: carpetaStatic2 });
}
const paxinaCopia = (req,res)=>{
    res.sendFile("eqretwer2354.html", { root: carpetaStatic2 });
}

const paxinaLogueo = (req,res)=>{
    console.log('estou en pá´xina de logueo')
    res.sendFile("dsfasd.html", { root: carpetaStatic2 });
}
module.exports = {
    paxinaCopia,
    paxinaOutra,
    paxinaLogueo
}