const home = require('../data/home');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {users: home})
    },
    detail: function(req, res, next) {
        res.render('detail', {users: home})
    }, 
}

module.exports = indexController;