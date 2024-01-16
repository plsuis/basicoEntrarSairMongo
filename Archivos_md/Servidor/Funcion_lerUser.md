# Función lerUser: 



Finalmente utilizaremos o código seguinte:

```javascript

    let query = {name:usuario}
      const result = coll.find(query)
      let salida = false;
        for await(const documento of result){
          if(documento.pwd === parseInt(pwd)){
            salida = true;
          }
        }  
        console.log('salida:',salida)
      return salida
```

O importante deste código é que está recorrendo os datos pedidos na consulta co resultado obtido de:

```javascript
const result = coll.find(query)
```

Tamén debemos entender que a variable ***saida***:
```javascript
let salida = false;
```
É importante xa que, está ligada ca función que está no arquivo ```funcions.js``` , para determinar se envía unha ```páxina``` ou unha ```mensaxe```:

```javascript
let rexistrado = await isUser(user,pwd)
    rexistrado ? next() : res.send("O usuario ou pwd non son correctos")


```

## Outras observacións:

### O await

> O ***await*** é devido a que as métodos que usamos como find ou outros, son asíncronos e nos proporcionan unha promesa.

### Función findOne: 
> No código seguinte obsérvase as diferentes formas na que podemos utilizar findOne. Neste caso, destácase que non podemos utilizala, xa que non responde as consultas proporcionadas. A API que proporciona MONGODB para Node non permite realizar as condicións de maneira axeitada.


```javascript
await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      console.log('datos: ',usuario,database,coleccion)
      //const result = coll.find({name:{$eq:usuario.name}})
      //const result = coll.find({})
      //const result = coll.find({"name":{$eq:usuario.name}})
      //let query = {name:"admin"}
      //let query = {name:usuario.name}//si
      //let query = {name:{$eq:usuario.name},pwd:{$eq:usuario.pwd}}// No tira
      //let query = {name:{$eq:usuario.name},pwd:{$eq:usuario.pwd}}//No tira
      //let query = {name:usuario.name,pwd:usuario.pwd}//No tira
      //let query = {$and:[{name:{$eq:usuario.name}},{pwd:{$eq:usuario.pwd}}]}// No tira
      //const result = await coll.findOne(query,{_id:new ObjectId('65a5905a07aaa17e85ce2cfb')})//si
      //const result = await coll.findOne(query)// non vai como ten que ir
      //let queryfind = {$and:[{name:{$eq:usuario.name}},{pwd:{$eq:usuario.pwd}}]}//no tira
      //let queryfind = {name:{$eq:usuario.name},pwd:{$eq:usuario.pwd}}//no tira
      //let queryfind = {name:usuario.name,pwd:usuario.pwd}//no tira
      let queryfind = {name:usuario.name}//esta sí
      const result = coll.find(queryfind)
      
      //console.log('o resultado do find: ',result)
     
      
     //let datosUsers = []
      
      //for await...of
        for await(const documento of result){
 
        console.log('documento: ',documento)
        if(documento.pwd == usuario.pwd){
          console.log('é o admin: ',documento.pwd,usuario.pwd)
        }  
        if(documento.pwd === parseInt(usuario.pwd)){
          console.log('é o admin: ',documento.pwd,usuario.pwd)
        }  
        if(documento.pwd === usuario.pwd){
          console.log('AQUÍ NON ENTRA: documento.pwd === usuario.pwd')
        }     
      }  
```



Polo que para atopar un usuario, deberemos proceder a un filtro 'manual', de tal xeito que facemos un bucle:
 ```javascript
  for await ... of 

  //for await...of
        for await(const documento of result){
 
        console.log('documento: ',documento)
        if(documento.pwd == usuario.pwd){
          console.log('é o admin: ',documento.pwd,usuario.pwd)
        }  
        if(documento.pwd === parseInt(usuario.pwd)){
          console.log('é o admin: ',documento.pwd,usuario.pwd)
        }  
        if(documento.pwd === usuario.pwd){
          console.log('AQUÍ NON ENTRA: documento.pwd === usuario.pwd')
        }     
      } 
```




Outro detalle a observar, é que, temos que ter en conta cómo filtraremos os datos. Neste caso puntual, o pwd, é numérico na bbdd, polo que deberemos telo en conta. Observade as seguintes condicións:

```javascript
        if(documento.pwd == usuario.pwd){
          console.log('é o admin: ',documento.pwd,usuario.pwd)
        }  
        if(documento.pwd === parseInt(usuario.pwd)){
          console.log('é o admin: ',documento.pwd,usuario.pwd)
        }  
        if(documento.pwd === usuario.pwd){
          console.log('AQUÍ NON ENTRA: documento.pwd === usuario.pwd')
        } 

```
***parseInt*** utilízase para convertir a entrada a enteiro, na última condición estamos a utilizar a entrada pero sen convertir, aquí non entra

