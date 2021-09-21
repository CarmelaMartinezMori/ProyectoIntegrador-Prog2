const misFotos = require('../data/home');

const miperfilController = {
    index: function(req, res){
        return res.render('miPerfil', {misFotos})
    }
 }
 module.exports = miperfilController;