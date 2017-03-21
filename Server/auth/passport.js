const Admin = require('../models/admin');
//

const config = require('../config.js');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');
const LocalStrategy = require('passport-local');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secretToken
};

passport.use(new JwtStrategy(jwtOptions, function(payload, done){
 Admin.findById(payload.sub, function(err, user){
    if(err) return done(err, false);
    if(user) {
      return done(null, user)
    } else {
      done(null, false);
    }
  });
})
)
