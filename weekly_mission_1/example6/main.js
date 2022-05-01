require('./patcher') // Llamas este módulo que modifica el objeto instanciado
//primero se modifica la clase logger o algo asi
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

logger.customMessage()
logger.log('This is an informational message')