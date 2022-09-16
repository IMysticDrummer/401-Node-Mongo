'use strict';

/*
//Con Callback
function cb(num) {
  for (let index = 0; index < num; index++) {
    console.log(index);    
  }
  return 'hecho';
}

function main(num, cb){
  console.log('Hemos pasado el numero ', num);
  console.log(cb(num));
}

main(100, cb);
*/

//Con promesa
const cb= function (num) {
  return new Promise((resolve, reject) => {
    if (num<=100) {
      for (let index = 0; index < num; index++) {
        console.log(index);    
      }
      return resolve('hecho');
    }
    return reject('El número debe ser menor o igual a 100');
  });
};

/*
//Main usado con promise
function main(num, cb){
  console.log('Hemos pasado el numero ', num);
  
  cb(num).then((resultado)=>{
    console.log('dentro de la promesa');
    console.log(resultado);
  }).catch((error)=>{
    console.log(error);
  });
  
};
*/

//Main con async/await
async function main(num, cb){
  console.log('Hemos pasado el numero ', num);
  
  try {
    console.log('dentro de la promesa');
    const resultado=await cb(num);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};

main(100, cb);