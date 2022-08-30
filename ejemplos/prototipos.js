'use strict';

//definimos una función constructora de objetos
function Persona(nombre) {
  this.nombre=nombre;
}

//Construir un objeto
const luis=new Persona('Luis');

Persona.prototype.saluda=function(){console.log(`Hola, soy ${this.nombre}`)};

luis.saluda();