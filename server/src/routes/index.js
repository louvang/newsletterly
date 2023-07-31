const { Router } = require('express');
const authRoutes = require('./auth');
const router = Router();

router.use('/', authRoutes);

module.exports = router;
