var express = require('express');
var router = express.Router();
const {query, validationResult}=require('express-validator');

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

//Recibiendo parémetros en la ruta
router.get('/parametro_en_ruta/:numero', (req, res, next)=>{
  const numero=req.params.numero;
  res.send('He recibido '+ numero);
});

router.get('/parametro_opcional/:talla?', (req, res, next)=>{
  const laTallaRecibida=req.params.talla;
  res.send('La talla es '+ laTallaRecibida);
});

router.get('/piso/:piso([0-9]+)/puerta/:puerta', (req, res, next)=>{
  console.log(req.params);
  res.send('Ok');
});

router.get('/en_query_string', [ // validaciones
  query('orderby').isAlphanumeric().withMessage('must be alphanumeric'),
  query('solo').isNumeric().withMessage('must be numeric'),
  // query('color').custom(color => { aqui validaría el color })
], (req, res, next)=> {
  validationResult(req).throw();
  console.log(req.query);
  const orderBy = req.query.orderby;
  const numero = req.query.solo;
  res.send('ordenar por ' + orderBy + ' y sacar solo ' + numero);
});

router.put('/', (req, res, next)=>{
  const color=req.body.color;
  console.log('Por put he recibido color '+color);
  res.send('Por put he recibido '+ color);
});

module.exports = router;
