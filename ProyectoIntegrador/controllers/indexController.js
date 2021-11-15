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
    search: function (req, res) {
        let search = req.query.busqueda;
        posteo.findAll({
            where: [
                {'pie':  {[op.like]: `%${search}%`}}
            ],
            limit: 10,
            offset: 0,
        })
        .then (resultado => {
            res.render('resultadoBusqueda', {pie: resultado});
        })
        
        .catch(error => {
            console.log("Error de conexion: " + error.message);
            res.render('error', {error: "Error de conexion: " + error.message});
        });
    },
    
}

module.exports = indexController;