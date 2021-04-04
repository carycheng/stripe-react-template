const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.post('/say-something', controllers.saySomething);

module.exports = router;