envioForm.addEventListener("click",async (e)=>{
    let datoEnvio = {
        method:'POST',
        body: new FormData(datosForm)
    }
    let envio = await fetch('/logueo',datoEnvio)
    let resposta = await envio.json()

    /**
     * if resposta = logueado =>
     */
})