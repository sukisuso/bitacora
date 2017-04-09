'use strict';

/*
 * Config.Express
 * Jesús Juan Aguilar 2017
 * */

const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const log4js = require('log4js');
const session = require('express-session');

const logger = log4js.getLogger('EXPRESS');

module.exports = function createDeafaultExpressConfiguration(express) {
  const app = express();
  const PUBLIC_URL = path.join(__dirname, '/../../../src/static');

  app.use(log4js.connectLogger(logger, { level: 'info', format: ':method :url' }));
  app.use(express.static(PUBLIC_URL));
  app.use(cookieParser());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(session({
    secret: '23e23EC2AA2B2B949252ECdsadswd23ddnjuiwd82dhqsgdya73A64E238F7778dy832hu',
    resave: true,
    saveUninitialized: true,
  }));
  app.disable('x-powered-by');

  return app;
};
