var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/login');

router.get('/registracion', userController.register);
router.post('/registracion', userController.email);


module.exports = router;
