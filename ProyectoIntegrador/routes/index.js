var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', function(req, res, next){
  res.render('login', {title : "Express"});
});
router.get('/registracion', function(req, res, next){
  res.render('registracion', {title : "Express"});
});
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
router.get('/detallePost', function(req, res, next){
  res.render('detallePost', {title : "Express"});
});
router.get('/detalleUsuario', function(req, res, next){
  res.render('detalleUsuario', {title : "Express"});
});
router.get('/editarPerfil', function(req, res, next){
  res.render('editarPerfil', {title : "Express"});
});
module.exports = router;