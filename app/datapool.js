'use strict';

/*
 * Datapool
 * Jesús Juan Aguilar 2017
 * */

const mongoose = require('mongoose');
const fs = require('fs');
const config = require('./config/config');

mongoose.connect(config.database);
const ObjectId = mongoose.Types.ObjectId;
const logger = require('log4js').getLogger('BITÁCORA');

const CONTROLLERS_FOLDER = '/controllers';
const MODELS_FOLDER = '/models';

exports.getRepository = function getRepository(model) {
  return mongoose.model(model);
};

function loadRepositories() {
  const files = fs.readdirSync(`${__dirname}${MODELS_FOLDER}`);
  logger.info('Loading models');
  files.forEach((file) => {
    logger.info(`##${MODELS_FOLDER}/${file.split('.')[0]}`);
    require(`.${MODELS_FOLDER}/${file.split('.')[0]}`);
  });
}

exports.id = function createObjectId(id) {
  return ObjectId(id);
};

function loadControllers(app) {
  const files = fs.readdirSync(`${__dirname}${CONTROLLERS_FOLDER}`);
  logger.info('Loading controllers');
  files.forEach((file) => {
    logger.info(`##${CONTROLLERS_FOLDER}/${file.split('.')[0]}`);
    const controller = require(`.${CONTROLLERS_FOLDER}/${file.split('.')[0]}`);
    controller(app);
  });
}

exports.loadEnviroment = function loadPoolAplication(app) {
  loadRepositories();
  loadControllers(app);
};
