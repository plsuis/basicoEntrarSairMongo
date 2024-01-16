envioForm.addEventListener("click",async (e)=>{
    e.preventDefault()

    let resposta = await fetch("/logueo",{
        method:'POST',
        body: new FormData(datosForm)
    })
    console.log('resposta: ?',resposta,resposta.url)
    if(resposta.redirected == true){
        
        window.location.replace("./logueo")
    }else{
         let respostaServer = await resposta.json()
        console.log(respostaServer) 
        
    }
    
    
})