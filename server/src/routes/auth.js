const { Router } = require('express');
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrUser,
} = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/api/register', registerUser);
authRouter.post('/api/login', loginUser);
authRouter.get('/api/logout', logoutUser);
authRouter.get('/api/user', getCurrUser);

module.exports = authRouter;
