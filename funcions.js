const {isUser} = require("./funcions/lerUser.js")

const leoUsers = async (req,res,next) =>{
    let dato = {
        mensaxe: "O usuario ou pwd non son correctos"
    }
    const {user,pwd} = req.body  
    let rexistrado = await isUser(user,pwd);
    
    console.log('dato: ', rexistrado,user,pwd)
    //rexistrado ? next() : res.send(dato)
    if(rexistrado){
        console.log('entra en rexistrado')
        res.redirect("./logueo")
        //next()
    }else{
        res.send(dato)
    }
    
}

module.exports= {
    leoUsers
}