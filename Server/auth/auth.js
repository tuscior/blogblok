const jwt = require('jwt-simple');
const Admin = require('../models/admin.js');
const config = require('../config.js');

function encode(id){
  return jwt.encode({sub: id}, config.secretToken);
}
exports.znajdz = (req,res) => {
Admin.findOne({}, (err, admin) => {
	if(err) return err;
	res.json(admin);
});
}
//
exports.login = function(req, res, next){
const password = req.body.password;
const nickname = req.body.nickname;

Admin.findOne({password: password}, function(err, admin){
 if(err) return err;
 if(admin) {
 	  const id = admin._id;
 	  res.send({token: encode(id)});
 }
});	
}


