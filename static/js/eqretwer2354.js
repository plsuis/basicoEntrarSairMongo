sair.addEventListener("click",()=>{
    window.location.replace("./")
})
irACopia.addEventListener("click", async (e)=>{
    e.preventDefault()
    let token = localStorage.getItem('test');
    console.log('en outra, e collo o token: ',token)
    datosEnvio = {
        method: 'POST',
        headers:{ "Authorization": token }
    }
    console.log('o Envio; ',datosEnvio)
    //location.pathname = `./copia/${token}`
    //location.pathname = `./copia`
    
    let envio = await fetch("./copia",datosEnvio)
    let resposta = await envio.text()

    if(resposta != "Falta a cabeceira de autorización"){
        document.querySelector('html').innerHTML = resposta
    }else{
        console.log(resposta)
    }

})