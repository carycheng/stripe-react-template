const express = require('express');
const router = express.Router();
const controllers = require('../controllers/charges');

router.post('/create-charge', controllers.createCharge);

module.exports = router;