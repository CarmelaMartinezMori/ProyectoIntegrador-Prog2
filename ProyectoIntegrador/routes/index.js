var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', indexController.index);

//router.get('/', indexController.comentar);
//router.get('/', indexController.usuario);

//router.get('/detallePost', indexController.detail);

router.get('/login', function(req, res, next){
  res.render('login', {title : "Express"});
});

router.get('/registracion', userController.index);
router.post('/registracion', userController.email);

router.get('/resultadoBusqueda', function(req, res, next){
  res.render('resultadoBusqueda', {title : "Express"});
});
router.get('/login', function(req, res, next){
  res.render('login', {title : "Express"});
});
router.get('/miperfil', function(req, res, next){
  res.render('miperfil', {title : "Express"});
});
router.get('/agregarPost', function(req, res, next){
  res.render('agregarPost', {title : "Express"});
});

router.get('/detalleUsuario', function(req, res, next){
  res.render('detalleUsuario', {title : "Express"});
});
router.get('/editarPerfil', function(req, res, next){
  res.render('editarPerfil', {title : "Express"});
});
module.exports = router;