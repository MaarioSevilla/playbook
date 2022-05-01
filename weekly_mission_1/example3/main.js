/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('This is an informational message') //solo retorna una funcion por default
logger2.verbose('This is a verbose message') //podrian imporse diferentes funciones
