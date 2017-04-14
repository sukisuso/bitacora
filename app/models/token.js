const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Token = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  token: { type: String, required: true },
});

mongoose.model('Token', Token);
