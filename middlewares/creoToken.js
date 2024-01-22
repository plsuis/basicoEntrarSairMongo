let jwt = require('jsonwebtoken');

const enviarToken = (req,res)=>{
    let conxunto = req.body.nome + req.body.pwd
    console.log('o token: ',req.body,conxunto,req.body.nome)
    let token1 = jwt.sign({ dato: conxunto }, process.env.SECRETO);

    res.send({
        mensaxe:token1
    })
}

module.exports = {
    enviarToken
}