const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const configuration = require('../config.js');
//ES promise
mongoose.Promise = global.Promise;
//
const adminSchema = new Schema({
  nickname: { type: String, unique: true},
  password: String
});
const AdminClass = mongoose.model('admin', adminSchema);
const config = new AdminClass({
  nickname: configuration.nickname,
  password: configuration.password
});


module.exports = AdminClass;
