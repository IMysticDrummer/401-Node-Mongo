'use strict';

//definimos una función constructora de objetos
function Persona(nombre) {
  this.nombre=nombre;
}

//Construir un objeto
const luis=new Persona('Luis');

Persona.prototype.saluda=function(){console.log(`Hola, soy ${this.nombre}`)};

luis.saluda();

//Herencia de Persona -------------------------------
function Agente(nombre) {
  //heredamos propiedades, métodos y constructor de Persona
  //LLamamos al constructor de las personas con mi this y con el nombre dado
  Persona.call(this, nombre);
}

//Heredados propiedades y métodos de las personas
Agente.prototype=Object.create(Persona.prototype);
Agente.prototype.constructor=Agente;

const brown=new Agente('Brown');

brown.saluda();