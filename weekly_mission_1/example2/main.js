// node main.js


//se guarda en la constante todo lo que contiene (funciones exportadas) el archivo.
const logger = require('./logger')


//se hace uso de las funciones exportadas
logger.info('This is an informational message')
logger.verbose('This is a verbose message')