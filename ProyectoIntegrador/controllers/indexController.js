const posteos = require('../data/posteos');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {home: posteos})
    },
    detail: function(req, res, next) {
        res.render('detallePost', {home: posteos})
    }, 
}

module.exports = indexController;