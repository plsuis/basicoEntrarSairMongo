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
        //location.replace(`./copia`)
        console.log('en outra que envía inicialmente sen arquivo js, e collo o token: ',token)
    let datosEnvio = {
        method: 'GET',
        headers:{ "Authorization": token }
    }
    console.log('o Envio; ',datosEnvio)
    //location.pathname = `./copia/${token}`
    //location.pathname = `./copia`
    
    let envio = await fetch("./copia",datosEnvio)
    let resposta = await envio.text()

    if(resposta != "Falta a cabeceira de autorización"){
        let elementodDiv = document.createElement('div')
        elementodDiv.innerHTML =  resposta
        let num = document.querySelector('.paxina').childElementCount
        if(num != 0){
            console.log('entra en num')
            document.querySelector('.paxina').children[0].remove()
        }
        document.querySelector('.paxina').appendChild(elementodDiv)  
         //document.querySelector('html').innerHTML = resposta
        location.replace("./#copia")//
    }else{
        console.log(resposta)
    }
    })
}
const destinoOutra = ()=>{
    irAOutra.addEventListener("click",async (e)=>{
        e.preventDefault()
        let token = localStorage.getItem('test')
        console.log('en `copia` que envía inicialmente sen arquivo js, e collo o token: ',token)
    let datosEnvio = {
        method: 'GET',
        headers:{ "Authorization": token }
    }
    console.log('o Envio; ',datosEnvio)
    
    
    let envio = await fetch("./outra",datosEnvio)
    let resposta = await envio.text()

    if(resposta != "Falta a cabeceira de autorización"){
        let elementodDiv = document.createElement('div')
        elementodDiv.innerHTML =  resposta;
        console.log('childElementCount: ',document.querySelector('.paxina').childElementCount)
        let num = document.querySelector('.paxina').childElementCount
        if(num != 0){
            console.log('entra en num')
            document.querySelector('.paxina').children[0].remove()
        }
        document.querySelector('.paxina').appendChild(elementodDiv) 
        //document.querySelector('html').innerHTML = resposta
        location.replace("./#outra")//
    }else{
        console.log(resposta)
    }
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
       
        document.querySelector('link').setAttribute("href","./css/estiloPlantilla.css")
        destinoCopia()
        destinoOutra()
        saindo()
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