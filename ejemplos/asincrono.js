'use strict';

console.log('empiezo');

function escribeTras2Segundos(text, cb) {
  setTimeout(function(){
    console.log(text);
    cb();
  },2000);
};

escribeTras2Segundos('Texto 1', function(){
  escribeTras2Segundos('Texto 2', function(){
    console.log('termino');
  })
});

