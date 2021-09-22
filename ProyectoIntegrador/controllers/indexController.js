const home = require('../data/home');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {users: home})
    } 
}

module.exports = indexController;