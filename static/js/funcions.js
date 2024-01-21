import { respostaCliente } from "./helpers.js";
const saindo = ()=>{
    sair.addEventListener("click",()=>{
        window.location.replace("./")
    })
}
const destinoCopia = ()=>{
    irACopia.addEventListener("click",async (e)=>{
        e.preventDefault()
        let token = localStorage.getItem('test')
       
        //location.replace(`./copia/${token}`)
        location.replace(`./copia`)
    })
}

const envioDatosOServer = ()=>{
    
    envioForm.addEventListener("click",async (e)=>{
        e.preventDefault()
        let datoEnvio = {
            method:'POST',
            body: new FormData(datosForm)
        }
        let envio = await fetch('/logueo',datoEnvio)
        let resposta = await envio.text() // recibo a páxina que quero pintar
        
    
        respostaCliente(resposta,datoEnvio) // función que me pinta no html a páxina recibida
       
        saindo()
        destinoCopia()
    })
}
const rexistroUsuario = ()=>{
   
    rexistrarUser.addEventListener("click",async (e)=>{
        console.log('clico rexistro de usuario')
        e.preventDefault()
        let datossEnvio = {
            method:'POST',
            body: new FormData(formRexistro)
        }
        let envio = await fetch('/rexistra',datossEnvio)
        let resposta = await envio.json() // recibo a páxina que quero pintar
        
        console.log('resposta: ',resposta)
       
        
    })
}
export{
    envioDatosOServer,
    rexistroUsuario
}