const { query } = require('express');
const mongoose=require('mongoose');

//definimos el esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 150 }
}, {
  //collection:'agentes'
});


//MÉTODO ESTÁTICO DEL MODELO
agenteSchema.statics.lista=function (filtro, skip, limit,fields, sort) {
  const query=Agente.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.select(fields);
  query.sort(sort);
  //return Agente.find(filtro);
  return query.exec();
}

//Método de INSTANCIA de los agentes.
//NO UTILIZAR ARROW FUNCTIONS. Siempre como
//expersión
agenteSchema.methods.edadEsPar= function(){
  return this.age%2===0;
}

//creamos el modelo
const Agente=mongoose.model('Agente',agenteSchema);

//exportamos el modelo (opcional)
module.exports=Agente;