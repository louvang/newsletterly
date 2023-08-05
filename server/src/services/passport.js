const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, {
          msg: 'Incorrect username or password.',
        });
      }

      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          return done(null, user);
        } else {
          return done(null, false, {
            msg: 'Incorrect username or password.',
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  return done(null, {
    name: user.name,
  });
});

passport.deserializeUser(function (user, done) {
  return done(null, user);
});
