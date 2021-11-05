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
        let contraseñaEncriptada =  bcrypt.hashSync(req.body.contraseña, 10)
        console.log(contraseñaEncriptada)
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
        } else if (req.body.contraseña == "") {
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            res.render('registracion');
        } else if (req.body.contraseña.length < 3) {
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
                        where: [{ nombre: req.body.nombre }]
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
                                contraseña: contraseñaEncriptada
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
    //RENDERIZA LA VISTA DE LOGIN
    login: function(req,res){
        res.render('login')
    },
    processLogin: function(req,res){
        usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(user != undefined){
                let contraseñaCorrecta = bcrypt.compareSync(req.body.contraseña, user.contraseña)
                if(contraseñaCorrecta == true){
                    res.send("Bienvenido al sitio")
                }else {
                    res.send("Credenciales invalidas")
                }
            }
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    },
    // email : function(req, res){
    //     let errors = {};
    //     if(req.body.email == ""){
    //         errors.message = "email no puede estar vacio"; // Para que el form de registro no este vacio
    //         res.locals.errors = errors;
    //         return res.render('registracion');
    //     } else if(req.body.email != ""){
    //         return res.redirect('/');
    //     }
    // },
    // contraseña : function(req, res){
    //     if(req.body.contraseña == ""){
    //         errors.message = "la contrasenia no puede estar vacia"
    //     } else if (req.body.contraseña);
    // },
}

module.exports = userController;