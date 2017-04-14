'use strict';

/*
 * Router
 * Jesús Juan Aguilar 2017
 * */
const datapool = require('./datapool');

function defaultRedirect(req, res) {
  res.redirect('/');
}

module.exports = function router(app) {
  datapool.loadEnviroment(app);
  app.get('*', defaultRedirect);
};

