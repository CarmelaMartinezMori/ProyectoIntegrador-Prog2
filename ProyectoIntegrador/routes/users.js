var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.post('/login', userController.processLogin);

router.get('/registracion', userController.register);
router.post('/registracion', userController.store); //email


module.exports = router;
