var Router = Backbone.Router.extend({
  routes: {
    'menu/:id': 'displayItem',
    'checkout': 'displayCheckout',
  },
  $content: $('#content'),
  index: function() {
    // this.indexView = new IndexView();
    // this.indexView.render();
    this.renderItems();
    this.renderCart();
  },
  renderItems: function() {
    this.itemsView = new ItemsView({
      collection: App.menu,
    });

    this.$content.html(this.itemsView.el);
  },
  renderCart: function() {
    this.cartView = new CartView({
      collection: App.cart,
    });

    if (App.cart.length > 0) {
      $('#cart').slideDown();
    }
  },
  displayItem: function(id) {
    this.detailsView = new ItemDetailsView({
      model: App.menu.get(id),
    });

    this.detailsView.render();
    this.$content.html(this.detailsView.el);
    this.renderCart();
  },
  displayCheckout: function() {
    $('#cart').hide();
    this.checkoutView = new CheckoutView({
      collection: App.cart,
    });

    this.$content.html(this.checkoutView.el);
  },
  initialize: function() {
    this.route(/^\/?$/, 'index');
  },
});