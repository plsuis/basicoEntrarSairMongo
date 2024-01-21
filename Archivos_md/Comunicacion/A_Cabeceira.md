# Indicación

## O headers

Temos falado das cabeceiras dentro da comunicación entre o ```cliente``` e o ```servidor```.

Cando vaiamos a enviar un verbo ```POST```, con datos de texto, deberemos colocar a propiedade ```headers```, co valor seguinte: ```'Content-Type': 'application/json'```.

```javascript
let envioPost = await fetch('/omeutoken',{
                method: 'POST',
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify(datosParaToken)
            })
```
Temos tamén que convertilo dato que vaiamos a enviar, mediante `JSON.stringify`.
>[!NOTE]
> o método JSON.stringify() convirte un obxeto o valor de JavaScript nunha cadea de texto JSON
Deste xeito, os datos serán vistos no back, a través de `req.body`