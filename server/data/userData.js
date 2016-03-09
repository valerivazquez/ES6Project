var config = require('../../server/config');
var mongodb = require('./mongodb.js')
var mongoCol = "users"
var bcrypt = require('bcryptjs');
var moment = require('moment');
var jwt = require('jwt-simple');



/*
 |--------------------------------------------------------------------------
 | Login Required Middleware
 |--------------------------------------------------------------------------
 */
exports.ensureAuthenticated = function (req, res, next) {
  
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);
  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;

  
}

/*
 |--------------------------------------------------------------------------
 | Generate JSON Web Token
 |--------------------------------------------------------------------------
 */
exports.createToken = function (user) {  
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()

  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

/*
 |--------------------------------------------------------------------------
 | User Validation
 |--------------------------------------------------------------------------
 */

exports.comparePassword = function (password, passwordDB, done) {
  bcrypt.compare(password, passwordDB, function(err, isMatch) {
    done(err, isMatch);
  });
};



exports.findingByEmail = function (email) {
	console.log("Request email:" + email)
	return mongodb.finding(mongoCol, {
		email: email
	});
}

exports.findingByEmailPassword = function (email, password) {
	return mongodb.finding(mongoCol, {
		email: email,
		password: password
	});
}

exports.inserting = function (usuario) {
	return mongodb.inserting(mongoCol, usuario);
}

exports.updating = function (usuario) {
	return mongodb.updating(mongoCol, {
			email: usuario.email
		},
		usuario);
}