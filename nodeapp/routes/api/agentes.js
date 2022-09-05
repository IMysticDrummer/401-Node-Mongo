const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  const agentes= [
    {name: 'Jones', age: 41},
    {name: 'Brown', age: 22}
  ];

  res.json({results: agentes});
});