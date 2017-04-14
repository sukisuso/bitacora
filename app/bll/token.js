/**
* Jesús Juan Aguilar - TokenBll
* 2017
*/

const datapool = require('../datapool');
const TokenGenerator = require('token-generator')({
  salt: 'bitácora token generator XXXXXXXXXXXXXXXX-XXXXX-XX',
  timestampMap: '0a1scz8sd5',
});

const TokenModel = datapool.getRepository('Token');

function findOne(token) {
  return TokenModel.findOne({ token })
    .lean().exec();
}

function generate(userId) {
  const sv = new TokenModel({
    user: userId,
    date: new Date(),
    token: TokenGenerator.generate(),
  });

  return sv.save();
}

function isValid(token) {
  if (TokenGenerator.isValid(token)) {
    return true;
  }

  return false;
}

exports.findOne = findOne;
exports.generate = generate;
exports.isValid = isValid;
