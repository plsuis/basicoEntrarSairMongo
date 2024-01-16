const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO
const database = process.env.BBDD
const client = new MongoClient(url)
const coleccion = "usuarios";



async function isUser(usuario,pwd) {
    try {
      
      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      
      let query = {name:usuario}
      const result = coll.find(query)
      let saida = false;
        for await(const documento of result){
          if(documento.pwd === parseInt(pwd)){
            saida = true;
          }
        }  
      return saida
      
    } finally {
     
      await client.close();
     
    }
  }

  module.exports = {
    isUser
  }