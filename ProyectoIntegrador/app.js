var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( {
  secret: "Mensaje Secreto",
  resave: false,
  saveUninitialized: true 
}))

app.use(function(req, res, next){
  if(req.cookies.usuarioId != undefined && req.session.usuario == undefined){
    usuario.findByPk(req.cookies.usuarioId)
    .then(usuario => {
      req.session.usuario = usuario.email;
      res.locals.usuario = req.session.usuario;
      req.session.idUsuario = usuario.id;
      res.locals.idUsuario = req.session.idUsuario 
    })
  }
  return next();
})

app.use(function(req, res, next){
  res.locals.usuario = null
  if(req.session.usuario != undefined){
    res.locals.usuario = req.session.usuario
  }
  return next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
