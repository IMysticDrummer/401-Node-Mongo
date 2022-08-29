'use strict';

//Crear una función para usarla como constructor de objetos
function Fruit(nombre){
  this.nombre =nombre;

  this.saluda=function(){
    console.log(`Hola, soy ${this.nombre}`);
  };
};


//Crear un objeto con la función constructora
let limon = new Fruit('Limon');

console.log(limon);
limon.saluda();