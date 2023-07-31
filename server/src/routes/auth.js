const { Router } = require('express');
const { registerUser } = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/api/register', registerUser);

module.exports = authRouter;
