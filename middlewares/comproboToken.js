let jwt = require('jsonwebtoken');
const tesToken = (req,res,next)=>{
    console.log("req.headers.authorization: ",req.headers.authorization)
    const { authorization } = req.headers;
    console.log(`Estou en tesToken ${authorization} ${process.env.SECRETO}`);
    

    // Se authorization está vacío devolvo un erro
    if (!authorization) {
      const error = new Error("Falta a cabeceira de autorización");
      error.httpStatus = 401;
      throw error;
    }

    let tokenInfo;
    
    try {
      tokenInfo = jwt.verify(authorization, process.env.SECRETO);
      
    } catch (e) {
      const error = new Error("El token no es válido");
      error.httpStatus = 401;
      throw error;
    } 
    next()
}

module.exports = {
    tesToken
}