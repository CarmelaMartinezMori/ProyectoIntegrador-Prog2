const posteos = require('../data/posteos');
const comentario = require('../data/comentarios');
const usuarios = require('../data/usuarios');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {home: posteos, data: usuarios, coment: comentario})
    },
    comentar: function(req, res, next) {
        res.render('index', {coment: comentario})
    },
    usuario: function(req, res, next) {
        res.render('index', usuarios)
    },
    detail: function(req, res, next) {
        res.render('detallePost', {home: posteos})
    }, 
}

module.exports = indexController;