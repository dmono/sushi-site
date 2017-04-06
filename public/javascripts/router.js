var Router = Backbone.Router.extend({
  routes: {
    'menu/:id': 'displayMenuItem',
    'checkout': 'displayCheckout',
  },
  $content: $('#content'),
  index: function() {
    this.indexView = new IndexView({
      collection: App.menu,
    });

    this.$content.html(this.indexView.el);

    if (!this.cartView) {
      this.renderCart();
    }
  },
  renderCart: function() {
    this.cartView = new CartView({
      collection: App.cart,
    });

    if ($('#cart').length > 0) {
      $('#cart').replaceWith(this.cartView.el);
    } else {
      this.$content.before(this.cartView.el);
    }

    if (App.cart.length > 0) {
      this.cartView.checkVisibility();
    }
  },
  displayMenuItem: function(id) {
    this.detailsView = new ItemDetailsView({
      model: App.menu.get(id),
    });

    this.detailsView.render();
    this.$content.html(this.detailsView.el);

    if (!this.cartView) {
      this.renderCart();
    }
  },
  displayCheckout: function() {
    if (this.cartView) {
      this.cartView.remove();
      this.cartView = null;
    }

    this.checkoutView = new CheckoutView({
      collection: App.cart,
    });

    this.$content.html(this.checkoutView.el);
  },
  initialize: function() {
    this.route(/^\/?$/, 'index');
  },
});