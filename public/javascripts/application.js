var App = {
  templates: JST,
  setupRouter: function() {
    Backbone.history.start({
      pushState: true,
    });

    $(document).on('click', 'a[href^="/"]', function(e) {
      e.preventDefault();
      App.router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
    });
  },
  updateStorage: function() {
    localStorage.setItems('sushiCart', JSON.stringify(this.cart.toJSON()));
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('addCartItem', this.cart.addItem.bind(this.cart));
    $(window).on('unload', this.updateStorage.bind(this));
  },
  init: function(menu) {
    this.menu = new Menu(menu);
    this.router = new Router();
    this.cart = new CartItems();
    this.bindEvents();
    this.setupRouter();
  }
};

Handlebars.registerHelper('formatPrice', function(price) {
  return Number(price).toFixed(2);
});

Handlebars.registerHelper('formatNutrition', function(value) {
  return Number(value).toFixed(3);
});