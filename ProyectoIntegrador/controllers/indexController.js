const db = require('../database/models');
const posteo = db.Posteo; 
const comentario = db.Comentario;
const usuario = db.Usuario;


const op = db.Sequelize.Op


const indexController = {
    //HOME
    index: function (req, res){
        let posteos = posteo.findAll({
            order: [
                ["createdAt", "DESC"]
            ]
        });
        let comentarios = comentario.findAll({
            order: [
                ["createdAt", "DESC"]
            ]
        });
        
        Promise.all([posteos, comentarios])
        .then(([posteos, comentarios]) => {
            return res.render ('index', {posteos: posteos, comentarios: comentarios})
        })
        .catch(error => {
            console.log(error);
            return res.send(error);
            
        })
    }, 
    detail : function(req, res) {
        let filtro = {
            include: [
                {association: "comentarios", include: "usuarios"},
                {association: "usuarios"}
            ], 
            order: [
                ["comentarios", "createdAt", "DESC"],
            ]
        }
        posteo.findByPk(req.params.id, filtro)
        .then(posteos => {
            res.render("detallePost", {posteos : posteos});
        })
        .catch(error => {
            console.log(error);
            return res.send(error);
        })
    },
    detailUsuario : function(req, res) {
        usuario.findByPk(req.params.id)
        .then(usuario => {
            res.render("detalleUsuario", {usuarios : usuarios})
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
    //RENDERIZAR AGREGAR POST
    create: function (req, res){
        res.render('agregarPost')
    },
    //GUARDAR EL POST
    store: function(req,res){
        posteo.create({
            nombreDeUsuario: req.body.nombreDeUsuario,
            imagen: req.file, 
            pie: req.body.pie
        })
        .then(posteo => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    }
}

module.exports = indexController;