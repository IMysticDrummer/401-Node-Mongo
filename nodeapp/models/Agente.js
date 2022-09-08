const mongoose=require('mongoose');

//definimos el esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 150 }
}, {
  //collection:'agentes'
});


//MÉTODO ESTÁTICO DEL MODELO
agenteSchema.statics.lista=function (filtro) {
  return Agente.find(filtro);
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