'use strict';

console.log('empiezo');

function escribeTras2Segundos(text, cb) {
  setTimeout(function(){
    console.log(text);
    cb();
  },2000);
};

//Función mía
/*
function serie(cb, times){
  let bucle=times;
  
  cb(`Texto ${bucle}`,function(){
    let b=bucle-1;
    if (b>0) serie(cb,b);
    if (b===0) cb(`Termino`,function(){});
  })
}
*/

//Función del profesor
//llamar a al función fn, n veces, en serie, y un callback de terminación
function serie(arr, fn, callbackTerminacion) {
  if (arr.length==0) {
    callbackTerminacion();
    return;
  }
  fn(`Texto ${arr.shift()}`, function() {
    serie(arr, fn, callbackTerminacion);
  })
}

/*
escribeTras2Segundos('Texto 1', function(){
  //console.log('termino');
});
*/
serie([1,2,3,4,5,6], escribeTras2Segundos,function(){console.log(`Termino`)});
