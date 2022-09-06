const mongoose=require('mongoose');

//definimos el esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: { type: Number, min: 18, max: 150 }
});

//creamos el modelo
const Agente=mongoose.model('Agente',agenteSchema);

//exportamos el modelo (opcional)
module.exports=Agente;