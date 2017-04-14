/**
* Jesús Juan Aguilar - LoginBll
* 2017
*/

const datapool = require('../datapool');

const UserModel = datapool.getRepository('User');
const crypt = require('../helpers/crypto');

function findOne(user) {
  return UserModel.findOne({ user })
    .lean().exec();
}

function findOneByPass(user, pasword) {
  return UserModel.findOne({ user, pasword })
    .lean().exec();
}

function save(dto) {
  const sv = new UserModel({
    user: dto.username,
    password: crypt.encrypt(dto.password),
    email: dto.email,
    name: dto.name,
    phone: dto.phone,
  });

  return sv.save();
}

exports.findOne = findOne;
exports.save = save;
exports.findOneByPass = findOneByPass;
