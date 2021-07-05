const express = require('express');
const errorController = require('../app/controllers/ErrorController');
const router = express.Router();

router.use(errorController.handle404);
router.use(errorController.handle500);

module.exports = router;
