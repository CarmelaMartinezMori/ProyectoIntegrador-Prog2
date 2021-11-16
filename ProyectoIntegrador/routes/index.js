var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.index);
router.get('/detallePost/:id', indexController.detail);

router.get('/resultadoBusqueda', indexController.search);


router.get('/agregarPost', indexController.create);
router.post('/agregarPost', indexController.store);



router.get('/detalleUsuario', function(req, res, next){
  res.render('detalleUsuario', {title : "Express"});
});
router.get('/editarPerfil', function(req, res, next){
  res.render('editarPerfil', {title : "Express"});
});
module.exports = router;