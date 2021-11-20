//const posteos = require('../database/posteos');
const db = require('../database/models');
const { post } = require('../routes');
const posteo = db.Posteo; 
const comentario = db.Comentario;
const usuario = db.Usuario;


const op = db.Sequelize.Op


const indexController = {
    //HOME
    index: function (req, res){
        posteo.findAll(
            ({include:[
                { association: "usuarios" },
                { association: "comentarios", include: "usuarios" }
            ],
                order:[
                    ["createdAt","DESC"],
                ],
            }))
             .then(posteos=> {
                 return res.render("index", {posteos: posteos});
             }).catch(error => {
                 return res.send(error)       
             })
    }, 

    //DETALLE POSTEO
    detail : (req, res, next) => {
        let filtro = {
            include: [
                {association: "usuarios"},
                {association: "comentarios", include: "usuarios"}
            ], 
            order:[
                ["createdAt","DESC"],
            ],
        }
        posteo.findByPk(req.params.id, filtro)
        .then(resultado => {
            res.render("detallePost", {posteos : resultado});
        })
        .catch(error => {
            console.log(error);
            return res.send(error);
        })

        // posteo.findAll({
        //     include: [{association: "usuarios",
        //     association: "comentarios"}]
        // })
        // .then(posteos => {
        //     return res.render( 'detallePost', {posteos : posteos})
        // })
        // .catch(error => {
        //     return res.send(error);
        // })
        // let comentarios = comentario.findAll({
        //     include: [
        //         {association: "posteo", include: "usuarios"},
        //     ], 
        //     order: [
        //         ["createdAt", "DESC"],
        //     ]
        // });
        // Promise.all([posteos, comentarios])
        // .then(([posteos, comentarios]) => {
        //     return res.render ('detallePost', {posteos: posteos, comentarios: comentarios})
        // })
        // .catch(error => {
        //     console.log(error);
        //     return res.send(error);
        // })

        // posteo.findByPk(req.params.id, filtro)
        // .then(posteos => {
        //     res.render("detallePost", {posteos : posteos, comentarios: comentarios});
        // })
        // .catch(error => {
        //     console.log(error);
        //     return res.send(error);
        // })
    },

    //BUSCADOR
    search: function (req, res) {
        let search = req.query.busqueda;
        posteo.findAll(
            ({include:[
                { association: "usuarios" },
            ],
            where: [
                {'pie':  {[op.like]: `%${search}%`}}
            ],
            order:[
                ["createdAt","DESC"],
            ],
            limit: 10,
            offset: 0,
        }))
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
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        let fechaCreate = hoy.toISOString()
        posteo.create({
            pie: req.body.pie,
            imagen: req.file.filename, 
            fecha: fechaCreate,
            usuarios_id: req.session.idUsuario,
        })
        .then(posteo => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    },
    //EDITAR PUBLICACION
    edit: function(req, res){
        posteo.findByPk(req.params.id)
        .then(posteo => {
            res.render("editarPost", {posteo : posteo})
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    },
    update: function(req, res){
        posteo.update({
            nombreDeUsuario: req.body.nombreDeUsuario,
            imagen: req.file, 
            pie: req.body.pie
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(post => {
            res.redirect("/")
        })
        .catch(error => {
            console.log(error);
            res.send(error)
        })
    },
    //ELIMINAR POST
    delete: function(req, res){
        let id = req.params.id
        posteo.destroy({
            where: {
                id : id
            }
        })
        .then(post => {
            res.redirect('/')
        })
    },
    //AGREGAR COMENTARIO
    crearComentario: (req, res) => {
    
        db.Comentario.create({
            texto: req.body.texto,
            usuarios_id: req.session.idUsuario,
            productos_id: req.params.id
        })
        .then(comentarioNuevo => {
            res.redirect('/detallePost/' + req.params.id);
        })
            .catch((error) => {
                console.log("Error de conexion: " + error.message);

                res.render('error', { error: "Error de conexion: " + error.message });
            });
    },
    //ELIMINAR COMENTARIO
    borrarComentario: (req, res) => {
        db.Comentario.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.redirect('/detallePost/' + req.params.id);
            })
            .catch((error) => {
                console.log("Error de conexion: " + error.message);

                res.render('error', { error: "Error de conexion: " + error.message });
            });
    },

}

module.exports = indexController;