var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //Utilizar variables globales para renderizar las variables de la vista
  //res.render('index'); 

  //Utilizar objeto para pasar las variables
  let ahora=new Date();
  let segundos=ahora.getSeconds();
  
  //Guardar las variables en la respuesta
  //res.locals.nombre="Ivan"
  res.locals.bienvenido="Bienvenido";
  res.locals.codigo='<script>alert("inyección de código")</script>';
  res.locals.usuarios=[
    {nombre:'Jones', edad:45},
    {nombre: 'Smith', edad:34}
  ];

  //Llamada al renderizado
  res.render('index', { color: 'rojo', segundoActual:segundos, condicion:segundos %2===0 });

});

module.exports = router;
