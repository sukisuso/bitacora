const mongoose = require('mongoose');

const User = new mongoose.Schema({
  user: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  pasword: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

mongoose.model('User', User);
