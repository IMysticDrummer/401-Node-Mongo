'use strict';

//función que devuelve una promesa
function sleep(ms){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Para resolver (con o sin resultado)
      resolve(5);
      //Para rechazar y con la razón
      //reject('error fatal');
    }, ms);
  });
};

const promesa=sleep(2000);

console.log(promesa);
/*
promesa.then(() => {
  console.log('pasaron los dos segundos');
  return sleep(3000);
}).then(() => {
  console.log ('pasaron otros 3 segundos');
  return sleep(1000);
}).then(() => {
  console.log('Pasó otro segundo más');
});


//Promesa con resultado (dado en resolve)
promesa.then((resultado) => {
  console.log('pasaron los dos segundos, con resultado:', resultado);
  return sleep(3000);
}).then(() => {
  console.log ('pasaron otros 3 segundos');
  return sleep(1000);
}).then(() => {
  console.log('Pasó otro segundo más');
});
*/

//Promesa con tratamiento de error
promesa.then((resultado) => {
  console.log('pasaron los dos segundos, con resultado:', resultado);
  return sleep(3000);
}).then(() => {
  console.log ('pasaron otros 3 segundos');
  return sleep(1000);
}).then(() => {
  console.log('Pasó otro segundo más');
}).catch(err => {
  console.log('Ha ocurrido un error: ', err);
});