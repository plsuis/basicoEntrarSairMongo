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
       
        location.replace(`./copia/${token}`)
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

export{
    envioDatosOServer
}