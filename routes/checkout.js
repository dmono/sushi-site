var path = require('path');
var Menu = require(path.resolve(path.dirname(__dirname), 'modules/item_fs.js'));

module.exports = function(router) {
  router.get('/checkout', function(req, res, next) {
    res.render('checkout', {
      menu: Menu.get(),
    });
  });
};
