'use strict';

console.log('empiezo');

function escribeTras2Segundos(text) {
  setTimeout(function(){
    console.log(text);
  },2000);
};

escribeTras2Segundos('Texto 1');

console.log('termino');