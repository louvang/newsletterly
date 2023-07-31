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
