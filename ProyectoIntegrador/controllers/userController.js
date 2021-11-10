let db = require('../database/models');
const usuario = db.Usuario;
let bcrypt = require('bcryptjs');

const userController = {
    // RENDERIZAR LA VISTA DE REGISTRACIÓN 
    register: function(req, res){
        res.render('registracion')
    },   
    // ALMACENAR LOS DATOS DEL NUEVO USUARIO A LA BASE DE DATOS
    store: function(req, res){
        let contraseniaEncriptada =  bcrypt.hashSync(req.body.password, 10)
        console.log(contraseniaEncriptada)
        let errors = {}
        if (req.body.nombre == "") {
            errors.message = "El nombre de usuario es obligatorio";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.body.email == "") {
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.file == null) {
            errors.message = "La foto es obligatoria";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.body.celular == "") {
            errors.message = "El celular es obligatorio";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.body.fechaDeNacimiento == null) {
            errors.message = "La fecha de nacimiento es obligatoria";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.body.password == "") {
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.body.password.length < 3) {
            errors.message = "La contraseña es muy corta";
            res.locals.errors = errors;
            res.render('registracion');
        } else{
            usuario.findOne({
                where: [{ email: req.body.email }]
            })
            .then(resultado => {
                if (resultado != undefined) {
                    errors.message = "Ya existe un usuario con ese email";
                    res.locals.errors = errors;
                    res.render('registracion');
                } else {
                    usuario.findOne({
                        where: [{ nombreDeUsuario: req.body.nombreDeUsuario }]
                    })
                    .then (resultado2 =>{
                        if (resultado2 != undefined) {       
                            errors.message = "Ya existe un usuario con este nombre";
                            res.locals.errors = errors;
                            res.render('registracion');
                        } else {
                            usuario.create({
                                nombre: req.body.nombre,
                                apellido: req.body.apellido,
                                nombreDeUsuario: req.body.nombreDeUsuario,
                                email: req.body.email,
                                fechaDeNacimiento: req.body.fechaDeNacimiento,
                                celular: req.body.celular,
                                fotoPerfil: req.file.filename,
                                password: contraseniaEncriptada
                            })
                            .then(user => {
                                res.redirect('/')
                            })
                            .catch(err => {
                                console.log(err);
                                res.send(err)
                            })
                        }
                    })
                }
            }) 
        }
    },
    //RENDERIZAR LA VISTA DE LOGIN
    login: function(req,res){
        res.render('login')
    },
    processLogin: (req, res) => {
        let filtro = {
            where: {
                email: req.body.email
            }
        }
        let erroresLogin = {}
        usuario.findOne(filtro)
            .then(usuario => {
                if (usuario == null) {
                    erroresLogin.message = "Usted no tiene una cuenta con este email";
                    res.locals.erroresLogin = erroresLogin;
                    res.render('login');
                } else {
                    if (bcrypt.compareSync(req.body.password, usuario.password)) {
                        req.session.usuario = usuario.email;
                        req.session.password = usuario.password;
                        req.session.idUsuario = usuario.id;

                        if (req.body.recordarme) {
                            res.cookie("usuarioId", usuario.id, {maxAge: 1000 * 60 * 60 * 24})
                        }
                        res.redirect("/")
                    } else {
                        erroresLogin.message = "Contraseña incorrecta";
                        res.locals.erroresLogin = erroresLogin;
                        res.render('login');
                    }
                }
            })
            .catch((error) => {
                console.log("Error de conexion: " + error.message);
                res.render('error', { error: "Error de conexion: " + error.message });
            });
    },
}

module.exports = userController;