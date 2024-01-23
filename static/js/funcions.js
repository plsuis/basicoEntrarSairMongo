import { respostaCliente,f_irACopia,f_irAOutra,f_rexistrarUser,f_sair } from "./helpers.js";
const saindo = ()=>{
    sair.addEventListener("click",f_sair)
}

const destinoCopia = () => {
    irACopia.addEventListener("click",f_irACopia)
}
const destinoOutra = ()=>{
    irAOutra.addEventListener("click",f_irAOutra)
}
const rexistroUsuario = ()=>{
    rexistrarUser.addEventListener("click",f_rexistrarUser)
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
       
        document.querySelector('link').setAttribute("href","./css/estiloPlantilla.css")
        destinoCopia()
        destinoOutra()
        saindo()
    })
}

export{
    envioDatosOServer,
    rexistroUsuario
}