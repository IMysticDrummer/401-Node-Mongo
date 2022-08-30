'use strict';

//Crear una función para usarla como constructor de objetos
function Fruit(nombre){
  this.nombre =nombre;

  this.saluda=function(){
    console.log(`Hola, soy ${this.nombre}`);
  };
};


//Crear un objeto con la función constructora
const limon = new Fruit('Limon');

console.log(limon);

//Para no perder la conexión, dónde estén los paréntesis de ejecución,
//mirar lo quehay anterior al punto de la izquierda (en este ejemplo es limon)
limon.saluda();

//Aquí se pierde la "conexión" con el objeto limón, por lo que nos dice que es undefined.
//Los paréntesis de ejecuón se encontrarán dentro de setTimeout, y setTimeout desconoce
//la existencia de limon.
setTimeout(limon.saluda, 2000);

//Para conseguir que funcione hay varias formas

  //con bind.
  //crea una función con el mismo cuerpo, pero indicando que su this es el objeto marcado.
  setTimeout(limon.saluda.bind(limon), 2000);

  //call.
  //llama a esa función de ese objeto (no crea una copia), indicando el objeto al que aplicarlo.
  //OJO, CALL LLAMA Y EJECUTA A LA FUNCIÓN, por lo que con setTimeout no funcionaría
  const naranja=new Fruit ('Naranja');
  const funcion=limon.saluda;
  funcion.call(naranja);