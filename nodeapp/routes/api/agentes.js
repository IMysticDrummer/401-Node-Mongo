const express = require('express');
const router = express.Router();
const {query, validationResult} = require('express-validator');
const Agente=require('../../models/Agente');
const basicAuthMiddleware=require('../../lib/basicAuthMiddleware');


//GET /api/agentes
//Devuelve una lista de agentes
/*router.get('/', async (req, res, next) => {
  /*const agentes= [
    {name: 'Jones', age: 41},
    {name: 'Brown', age: 22}
  ];*/
/*  try{
    const agentes= await Agente.find();
  } catch (err) {
    next(err);
  }

  res.json({results: agentes});
});
*/
router.get('/', basicAuthMiddleware, async (req, res, next) => {
  try {

    //Usamos un método estático creado por nosotros en el 
    //modelo, en vel del método normal.
    //const agentes = await Agente.find();

    //ejemplo de petición de un campo sin id
    //http://localhost:3000/api/agentes/?fields=-_id

    //filtros
    filtro={};
    const name=req.query.name;
    const age=req.query.age;

    //paginación
    const skip=req.query.skip;
    const limit=req.query.limit;

    //selección de campos
    const fields=req.query.fields;

    //orden
    const sort=req.query.sort;


    if (name) {filtro.name=name}
    if (age) {filtro.age=age}
    const agentes = await Agente.lista(filtro, fields, sort);
    res.json({ results: agentes });

  } catch (err) {
    next(err);
  }
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
});


//POST /api/agentes (body)
//Crea un agente
router.post('/', async (req,res,next) => {
  try {
    const agenteData=req.body;

    //OJO esto lo crea en memoria
    const agente=new Agente(agenteData); 

    console.log(`La edad de ${agente.name} es par?: ,${agente.edadEsPar()}`);

    //ahora lo guardamos en la base de datos
    const agenteGuarddo= await agente.save();

    res.json({result: agenteGuarddo});

  } catch (error) {
    next(error);
  }
});


//DELETE /api/agentes/:_id
//Eliminar un agente
router.delete('/:id', async (req, res, next) => {

  try {
    const _id=req.params.id;

    await Agente.deleteOne({_id: _id});

    //Sólo respondemos código 200, porque es una eliminación
    res.json();
  } catch (error) {
    next(error);
  }
});

module.exports=router;