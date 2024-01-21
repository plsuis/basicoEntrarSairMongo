const {isUser} = require("./funcions/lerUser.js")

const leoUsers = async (req,res,next) =>{
    const {user,pwd} = req.body  
    let rexistrado = await isUser(user,pwd)
    let paxina = `O usuario é errado`;
    rexistrado ? next() : res.send(paxina)

    //rexistrado ? next() : res.send("O usuario ou pwd non son correctos")
}

module.exports = {
    leoUsers
}