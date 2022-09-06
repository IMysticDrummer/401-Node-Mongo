const express = require('express');
const router = express.Router();
const {query, validationResult} = require('express-validator');
const Agente=require('../../models/Agente');

//GET /api/agentes
//Devuelve una lista de agentes
router.get('/', async (req, res, next) => {
  /*const agentes= [
    {name: 'Jones', age: 41},
    {name: 'Brown', age: 22}
  ];*/
  try{
    const agentes= await Agente.find();
  } catch (err) {
    next(err);
  }

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

//GET /api/idAgente
//Devuelve un agente en concreto
router.get('/:_id', async (req, res, next) => {
  try {
    const _id=req.params.id;

    const agente = await Agente.findOne({_id: _id});

    res.json({ result: agente});
  } catch (error) {
    next(error);
  }
})

//PUT /api/idAgente
//Actualizar un agente. Se utiliza un parámetro del body
router.put('/:id', async (req, res, next) => {
  try {
    
    const _id=req.params.id;

    const data = req.body;

    const agenteActualizado = await Agente.findOneAndUpdate({_id:_id }, data, {
      new: true //new para que devuelva el documento corregido
    }); 

    res.json({result: agenteActualizado});

  } catch (error) {
    next(error);
  }
})
module.exports=router;