var express = require('express');
var router = express.Router();
const multer = require('multer');
let indexController = require('../controllers/indexController');
const path = require('path');

//MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/imagenesPerfil')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })


/* GET home page. */
router.get('/', indexController.index);
router.get('/detallePost/:id', indexController.detail);

router.get('/resultadoBusqueda', indexController.search);


router.get('/agregarPost', indexController.create);
router.post('/agregarPost', upload.single("imagen"), indexController.store);

router.get('/editarPost/:id', indexController.edit);
router.post('/editarPost/:id', indexController.update);
router.post('/deletePost/:id', indexController.delete);

//router.post ('/detallePost/:id', indexController.crearComentario);
//router.post ('/detallePost/:id', indexController.borrarComentario);
            
router.get('/editarPerfil', function(req, res, next){
  res.render('editarPerfil', {title : "Express"});
});
module.exports = router;