const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes');

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({
    path: `${__dirname}/.env.prod`,
  });
} else {
  require('dotenv').config({
    path: `${__dirname}/.env.dev`,
  });
}

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to Mongoose!'))
  .catch((err) => console.error(err));

app.use(
  session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    // cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
