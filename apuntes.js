/*

  AUTENTICACION

  Paso 1 --> Identificación de la persona
  Paso 2 --> Nosotros autenticamos que dice que es quien es.

  Vamos a utilizar basicauth de http
  https://developer.mozilla.org/es/docs/Web/HTTP/Authentication

  Vamos a utilizar la variante de cabeceras:
  "Cabeceras Authorization y Proxy-Authorization"

  Tiene que estar codificada en base64, así que vamos a
  utilizar una librería en concreto --> basic-auth
  npm i basic-auth

  Esta librería no es lo más seguro del mundo y sólo
  debe utilizarse para protección básica interna y
  cosas poco críticas
 */