'use strict';

console.log('Inicializo la calculadora');

module.exports.suma=function(a,b){
  return a+b;
};

//alias de module.exports
exports.resta=function(a,b){return a-b};
