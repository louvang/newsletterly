const passport = require('passport');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const emailExists = await User.findOne({
    email: req.body.email,
  });

  if (emailExists) {
    res.json({ userCreated: false, msg: 'Email already exists.' });
  }

  if (!emailExists) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dateCreated: Date.now(),
    });

    await newUser.save();
    res.json({ userCreated: true, msg: 'User created.' });
  }
};

exports.loginUser = (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });
  })(req, res, next);
};

exports.getCurrUser = (req, res) => {
  if (req.user) {
    res.send({ name: req.user.name });
  } else {
    res.send(null);
  }
};

exports.logoutUser = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.send({ userLoggedOut: true, msg: 'User logged out.' });
  });
};
