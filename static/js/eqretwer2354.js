sair.addEventListener("click",()=>{
    window.location.replace("./")
})
irAOutra.addEventListener("click", (e)=>{
    e.preventDefault()
    let token = localStorage.getItem('test')
    location.pathname = `./copia/${token}`
})