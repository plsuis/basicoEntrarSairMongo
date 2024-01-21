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
export {
    respostaCliente
}