# O cliente

> Aquí vou describir as caracteríscas máis importantes.

## O index.html

Este arquivo, contén un formulario inicial o cal vai facer o envío do ***user*** e o ***pwd*** o back.

Esta información de maneira implícita, vai no ***body*** do formulario. De tal xeito que o colleremos a no **servidor**.

## A carpeta views

Esta carpeta vai conter as diferentes páxinas da aplicación, neste caso :

- dsfasd.html
- eqretwer2354.html

## A carpeta js

Contén dous arquivos:

- index.js : neste caso non o estou a utilizar
- paxinasapp.js : contén o botón de saír da páxina
    - A función que se está a utilizar é parte da API nativa de javascript de ``` window.location ```

```javascript
sair.addEventListener("click",()=>{
    window.location.replace("./")
    
})
```

