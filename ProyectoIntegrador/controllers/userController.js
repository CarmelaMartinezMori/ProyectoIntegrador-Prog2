// Para que el form de registro no este vacio

const userController = {
    index : function(req, res){
        res.render('registracion')
    },
    email : function(req, res){
        let errors = {};
        if(req.body.email == ""){
            errors.message = "email no puede estar vacio";
            res.locals.errors = errors;
            return res.render('registracion');
        } else if(req.body.email != ""){
            return res.redirect('/');
        }
    },
    contraseña : function(req, res){
        if(req.body.contraseña == ""){
            errors.message = "la contrasenia no puede estar vacia"
        } if else(req.body.contraseña )

    }

}

module.exports = userController;