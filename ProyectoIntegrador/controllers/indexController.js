const home = require('../data/home');

const indexController = {
    index: function(req, res, next) {
        res.render('index', {home})
    } 
}

module.exports = indexController;