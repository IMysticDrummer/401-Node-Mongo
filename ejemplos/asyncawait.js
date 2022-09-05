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

async function main() {
  try{
    await sleep(2000);
    console.log('han pasado 2 segundos');
  } catch (err) {
    console.log('falló el primer sleep');
  }
  await sleep(3000);
  console.log('han pasado 3 segundos');

  for (let index = 0; index < 5; index++) {
    await sleep(3000);
    console.log('Buecle 3 segundos '+index);
  }

  //recoger el resultado
  const resultado=await sleep(3000);
  console.log('han pasado 3 segundos, con resultado '+resultado);
}

main().catch(err => {
  console.log('ocurrió un error ', err);
});