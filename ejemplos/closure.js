'use strict';

//función que devuelve un objeto
//creándolo así tenemos que las propiedades quedan privadas.
//También es accesible cada método, incluso en setTimeout, porque
//estamos usando clousures

//Los closusures siempre van a tener acceso al scope interno que los
//creó
function creaVehiculo(nombre) {
  const numeroCilindros=4;
  return {
    getNombre: function () {return nombre;},
    getNombre2() {return nombre;}, //forma abreviada de nombrar métodos,
    setNombre: function (valor) {nombre=valor;},
    saluda: function () {console.log(`Hola, soy un ${nombre} y tengo ${numeroCilindros} cilindros`);}
  }
}

const coche=creaVehiculo('Opel Astra');

coche.saluda();