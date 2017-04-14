const logger = require('log4js').getLogger('BITÁCORA');

exports.expressError = function expressError(res, error) {
  logger.error(error);
  res.status(500).send({ error: `[Error: Servers Mongo] Fallo recuperando datos. ** ${error}` });
};

exports.unauthorized = function unauthorized(res, error) {
  logger.error(error);
  res.status(401).send({ error: `[Error: Unauthorized] You are not able for this action ** ${error}` });
};
