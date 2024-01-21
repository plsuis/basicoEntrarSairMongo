const jwt = require("jsonwebtoken");
const creacionToken = (req,res,next)=>{
    console.log('entra ',req.body);
    const {user,pwd} = req.body;
    let usuario = pwd + user;
    console.log('usuario ',usuario)
    let _token = jwt.sign({dato:usuario},process.env.SECRETO)
    req.token = _token;
    req.usuario = usuario
   
    next()
}

module.exports = {
    creacionToken
}