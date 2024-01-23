const _oToken = (datoEnvio)=>{
    let datosParaToken = {}
    for(let [nome,valor] of datoEnvio.body){
        console.log(`${nome} = ${valor}`) 
        datosParaToken[`${nome}`] = valor;       
    }
    return datosParaToken
}
const envioDatosParaToken = async (datoEnvio) => {
       
    let datosParaToken = _oToken(datoEnvio)
    
    console.log('dentro do else: ',datosParaToken)
        
        location.replace("./###BENBIDO#A#PAXINA#DE#ENTRADA###")//

        let envioPost = await fetch('/omeutoken',{
            method: 'POST',
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify(datosParaToken)
        })
        
        let respotaPost = await envioPost.json();
        console.log('resposta : ', respotaPost.mensaxe)
        localStorage.setItem('test', respotaPost.mensaxe);

} 

/**
 * Función que recibe como valor de entrada a páxina recibida do back.
 * Ao mesmo tempo:
 * 
 * - Realizará o envío do pwd e usuario, para recibir o
 * token do usuario.
 * 
 * 
 * @param {*} resposta 
 * @param {*} datoEnvio 
 */
const respostaCliente = async (resposta,datoEnvio) => {
if(resposta == "O usuario é errado"){
    console.log(resposta)
}else{
    document.querySelector('html').innerHTML = resposta
    await envioDatosParaToken(datoEnvio)
}
}

async function f_irACopia(e){
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
}
async function f_irAOutra(e){
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
}
const f_rexistrarUser = async (e)=>{
    console.log('clico rexistro de usuario')
    e.preventDefault()
    let datossEnvio = {
        method:'POST',
        body: new FormData(formRexistro)
    }
    let envio = await fetch('/rexistra',datossEnvio)
    let resposta = await envio.json() // recibo a páxina que quero pintar
    
    console.log('resposta: ',resposta)
    formRexistro.children[0].value = "";
    formRexistro.children[1].value = "";
    
}
const f_sair = ()=>{
    window.location.replace("./")
}
export {
    respostaCliente,
    f_irACopia,
    f_irAOutra,
    f_rexistrarUser,
    f_sair
}