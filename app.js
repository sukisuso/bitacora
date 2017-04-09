'use strict';

/*
 * index
 * Jesús Juan Aguilar 2017
 * */

const express = require('express');
const expressCfg = require('./app/config/express');
const router = require('./app/router');
const config = require('./app/config/config.json');
const log4js = require('log4js');
const pjson = require('./package.json');

const logger = log4js.getLogger('BITÁCORA');
logger.info('Bitácora');
logger.info(`Project version: ${pjson.version}`);
logger.info(`Author: ${pjson.author}`);
logger.info(`Current directory: ${process.cwd()}`);

const app = expressCfg(express);
router(app);

app.listen(config.port);
logger.info('Listening on 3000.');
