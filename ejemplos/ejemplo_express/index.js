'use strict';

//Cargar express
var express=require('express');

//crear aplicación
var app=express();

//ese middelware se activa ante todas las peticiones
app.use((req, res, next) => {
  console.log (`Recibido petición `);
  //for (let clave in req) {
  //  console.log(req[clave]);
  //};
  console.log(req);
  next();
});

//añádir rutas
app.get('/', (req, res, next)=>{
  res.send('Hola Mundo');
});

app.get('/pedidos', (req, res, next)=>{
  if (true){
    //aquí queremos un error
    const error=new Error('La base de datos no funciona');
    next(error);
    return;
  };
  res.send('Hola Pedidos');
});

//Manejo de errores => middleware de errores
app.use((err, req, res, next)=>{
  res.send(`Ocurrió un error ${err.message}`);
});

//arrancar aplicación
app.listen(8080, ()=>{
  console.log ('Servidor HTTP arrancando en http://localhost:8080');
});