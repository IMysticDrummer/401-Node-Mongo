const express = require('express');
const router = express.Router();
const {query, validationResult} = require('express-validator');

router.get('/', (req, res, next) => {
  const agentes= [
    {name: 'Jones', age: 41},
    {name: 'Brown', age: 22}
  ];

  res.json({results: agentes});
});

//Vamos a validar datos

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

module.exports=router;