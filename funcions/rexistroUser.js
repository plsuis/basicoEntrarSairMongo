const {MongoClient} = require("mongodb")
const url = process.env.URLMONGO;
const database = process.env.BBDD;
const client = new MongoClient(url)
const coleccion = process.env.COLECCION;



async function rexistrarUsuario(req,res) {
    try {
      console.log('req.token rexistrarUsuario : ',req.usuario,req.token)

      await client.connect();
      const db = client.db(database);
      const coll = db.collection(coleccion);
      const {user,pwd} = req.body;
      let query = [{name:user,pwd:pwd}]
      
      const result = await coll.insertMany(query)
      console.log('result ',result)
      let saida = {
        mensaxe: result
      } 
      res.send(saida)
    } finally {
     
      //await client.close();
     
    }
  }

  module.exports = {
    rexistrarUsuario
  }