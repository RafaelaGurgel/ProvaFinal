const express = require('express');
const router = express.Router();
const { stats } = require('../controllers/dashboardController');
const { auth, authorize } = require('../middlewares/auth');

router.get('/stats', auth, authorize(['MANAGER', 'ADMIN']), stats);

module.exports = router;
