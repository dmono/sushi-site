var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'modules/item_fs.js'));

module.exports = function(router) {
  router.get('/menu/:id', function(req, res) {
    res.render('menu', {
      menu: Menu.get(),
    });
  });

  router.get('/menu', function(req, res) {
    res.render('menu', {
      menu: Menu.get(),
    });
  });
};