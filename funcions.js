const {isUser} = require("./funcions/lerUser.js")

const leoUsers = async (req,res,next) =>{
    const {user,pwd} = req.body  
    let rexistrado = await isUser(user,pwd)
    let paxina = `<h1>hola</h1>`;
    rexistrado ? next() : res.send(paxina)

    //rexistrado ? next() : res.send("O usuario ou pwd non son correctos")
}

module.exports= {
    leoUsers
}