const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: { type: String, required: true, maxlength: 64 },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true, minLength: 8, maxLength: 32 },
  dateCreated: { type: Date, default: Date.now, immutable: true },
});

userSchema.pre('save', function (next) {
  let user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      next(err);
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        next(err);
      }

      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
