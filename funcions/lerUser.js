const {MongoClient, ObjectId} = require("mongodb")
const url = process.env.URLMONGO
const database = process.env.BBDD
const client = new MongoClient(url)
const coleccion = process.env.COLECCION;



async function isUser(usuario,pwd) {
  let saida = false;
    try {
      
      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      
      let query = {name:usuario}
      const result = coll.find(query)
      
        for await(const documento of result){
          if(documento.pwd === parseInt(pwd)){
            saida = true;
          }
        }  
      
      
    } finally {
     
      await client.close();
      return saida
    }
  }

  module.exports = {
    isUser
  }