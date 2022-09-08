'use script';

//DONE conexión base de datos

//Utlizaremos la conexión de la
//aplicación, pero lo llamo con una
//constante para no terner que cargar aquí
//mongoose.
const connection=require('./lib/connectMongoose');





//DONE cargar los modelos
const Agente=require('./models/Agente');

async function main() {

  //TODO inicilizar la colección de agentes
  await initAgentes();
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
}