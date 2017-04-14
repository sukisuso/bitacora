'use strict';

/**
 * Jesús Juan Aguilar 2017
 * Auth Controller
 */
const co = require('co');

const logger = require('log4js').getLogger('BITÁCORA');
const userBll = require('../bll/user');
const tokenBll = require('../bll/token');
const handler = require('../helpers/error');
const crypt = require('../helpers/crypto');

module.exports = function StartPaths(app) {
  app.get('/api/logout', logout);
  app.post('/api/signup', signup);
  app.post('/api/login', loginUser);
};

function loginUser(req, res) {
  co(function* coLoginUser() {
    const user = yield userBll.findOne(req.body.username);
    if (user) {
      debugger
      if (crypt.encrypt(req.body.password) === user.password) {
        const session = req.session;
        session.user = user;
        const token = yield tokenBll.generate(user._id);
        res.send(token.token);
      } else {
        throw new Error(`Fail password: ${req.body.username}`);
      }
    } else {
      throw new Error(`No username finded: ${req.body.username}`);
    }
  }).catch((err) => { handler.expressError(res, err); });
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      logger.error(err);
    } else {
      res.redirect('/');
    }
  });
}

function signup(req, res) {
  co(function* coSignup() {
    const user = yield userBll.findOne(req.body.user.username);
    if (user) {
      throw new Error('Fail signup user exists.');
    } else {
      const userLogged = yield userBll.save(req.body.user);
      if (userLogged) {
        res.send(true);
      } else {
        throw new Error('Fail creating user.');
      }
    }
  }).catch((err) => { handler.expressError(res, err); });
}
