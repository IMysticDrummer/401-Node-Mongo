'use script';

const { read } = require('fs');
const { resolve } = require('path');
const readLine=require('readline');

//DONE conexión base de datos

//Utlizaremos la conexión de la
//aplicación, pero lo llamo con una
//constante para no terner que cargar aquí
//mongoose.
const connection=require('./lib/connectMongoose');


//DONE cargar los modelos
const Agente=require('./models/Agente');

async function main() {

  const continuar=await pregunta('¿Estas seguro de que quieres borrar toda la base de datos y cargar los datos iniciales');
  if (!continuar) {
    process.exit(1);
  }
  //TODO inicilizar la colección de agentes
  await initAgentes();

  connection.close();
}

main().catch(err=>console.log('Hubo un error: ',err));


async function initAgentes() {
  //Borrar todos los documentos de la base de datos
  const deleted=await Agente.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} agentes.`)
  //Crear agentes iniciales
  const inserted=await Agente.insertMany([
    {name: 'Brown', age: 34 },
    {name: 'Smith', age: 22}
  ]);
  console.log(`Creados ${inserted.length} agentes`);
  //Se pueden meter los datos en archivo JSON, hacer un require y 
  //se meten en la base de datos
}

//Función de pregunta de protección
function pregunta(texto) {
  return new Promise((resolve,reject)=>{

    const ifc=readLine.createInterface({
      input:process.stdin,
      output: process.stdout
    });
    
    ifc.question(texto, respuesta =>{
      ifc.close();
      if (respuesta.toLowerCase()==='si') {
        resolve(true);
      }
      resolve(false);
    });
  });

};