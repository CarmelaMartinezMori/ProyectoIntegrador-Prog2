/*const posteos = require('../data/posteos');
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

module.exports = indexController; */

const db = require('../database/models');
const posteo = db.Posteo; 
const comentario = db.Comentario;

const indexController = {
    index: function (req, res){
        let posteos = posteo.findAll();
        let comentarios = comentario.findAll();
        
        Promise.all([posteos, comentarios])
        .then(([posteos, comentarios]) => {
            return res.render ('index', {posteos: posteos, comentarios: comentarios})
        })
        .catch(error => {
            console.log(error);
            return res.send(error);
            
        })
    }
}

module.exports = indexController;