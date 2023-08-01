const { Router } = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/api/register', registerUser);
authRouter.post('/api/login', loginUser);
authRouter.post('/api/logout', logoutUser);

module.exports = authRouter;
