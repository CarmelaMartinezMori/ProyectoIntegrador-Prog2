const miPerfil = require('../data/miPerfil');

 const miperfilController = {
    index: function(req, res, next) {
        res.render('index', {perfil : miPerfil})
    },
}
 module.exports = miperfilController;