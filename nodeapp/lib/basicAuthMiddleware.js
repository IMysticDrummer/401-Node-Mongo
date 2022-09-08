'use strict';

const auth=require('basic-auth');

module.exports=(req, res, next) => {
  const user=auth(req);


  // buscar en la base de datos el ususario user.name
  // si lo encuentro, verifico la password

  if (!user || user.name!=='admin' || user.pass!=='1234') {
    //pedir que se autentifique
    //Ojo node se equivoca al dar la documentación de esto.
    //Ver en express en la parte del Response.
    //Las cabeceras verlas en la MDN authnticate
    res.set('WWW-Authenticate', 'Basic realm=Authorization required');
    res.sendStatus(401);
    return;
  }

  next();
}