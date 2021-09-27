const posteos = require('../data/posteos');
const comentario = require('../data/comentarios');
const usuarios = require('../data/usuarios');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {home: posteos, data: usuarios, coment: comentario})
    },
    detail: function(req, res, next) {
        res.render('detallePost', {home: posteos})
    }, 
}

module.exports = indexController;