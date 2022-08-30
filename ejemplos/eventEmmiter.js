'use strict';

//cargamos la librería de eventos
const EventEmitter= require('events');

//creamos un emisor de eventos
const emisor=new EventEmitter();

//activa la escucha de eventos
emisor.on('llamada de teléfono', function(quienLLama) {
  if (quienLLama==='madre') return;
  console.log('ring, ring...');
})

//esto se ejecuta sólo la primera vez que ocurra el evento
emisor.once('llamada de teléfono', function(){
  console.log('brr, brr...');
})

//emite el evento. lo lanzamos varias veces
emisor.emit('llamada de teléfono');
emisor.emit('llamada de teléfono');
emisor.emit('llamada de teléfono');

//lanza el evento, enviado información del evento.
//Con el manejador que hemos hecho, esto no sonará
emisor.emit('llamada de teléfono', 'madre');
emisor.emit('llamada de teléfono', 'madre');
emisor.emit('llamada de teléfono', 'madre');