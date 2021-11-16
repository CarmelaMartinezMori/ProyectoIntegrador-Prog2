var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

//MULTER Y PATH
const multer = require('multer');
const path = require('path');

//MULTER FOTO PERFIL
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/fotosPerfiles');
    },
    filename: (req, file, cb) => {
      
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  }); 
  
const upload = multer({storage: storage});  

router.get('/miPerfil/:id', userController.profile);
router.get('/detalleUsuario/:id', userController.detailUsuario);

router.get('/login', userController.login);
router.post('/login', userController.processLogin);

router.get('/registracion', userController.register);
router.post('/registracion', upload.single('fotoPerfil'), userController.store); //email check('email).isEmail()

router.get('/logout', userController.logout);

module.exports = router;
