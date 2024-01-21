const path = require("path");
const carpetaStatic2 = path.join(__dirname, "static/views/");
const carpet = path.join(__dirname, "outraPaxina/");
const paxinaOutra = (req,res)=>{
    res.sendFile("eqretwer2354.html", { root: carpetaStatic2 });
}
const paxinaCopia = (req,res)=>{
    res.sendFile("dsfasd.html", { root: carpetaStatic2 });
}

const paxinaLogueo = (req,res)=>{
    res.sendFile("dsfasd.html", { root: carpet });
}
module.exports = {
    paxinaCopia,
    paxinaOutra,
    paxinaLogueo
}