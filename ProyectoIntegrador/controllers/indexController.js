const home = require('../data/home');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {users: home})
    },
    detail: function(req, res, next) {
        res.render('detallePost', {users: home})
    }, 
}

module.exports = indexController;