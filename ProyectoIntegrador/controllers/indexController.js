/*
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
const usuario = db.Usuario;
const op = db.Sequelize.Op

const indexController = {
    //HOME
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
    }, 
    //BUSCADOR
    search: (req, res) => {
        let search = req.query.search;
        posteo.findAll({
            where: [
                {"pie":  {[op.like]:`%${search}%`}}
                
            ]
        })
        .then (resultado => {
            res.render('resultadoBusqueda', {pie: resultado});
        })
        
        .catch((error) => {
            console.log("Error de conexion: " + error.message);
            res.render('error', {error: "Error de conexion: " + error.message});
        });
    },
    
}

module.exports = indexController;