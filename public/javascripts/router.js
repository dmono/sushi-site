var Router = Backbone.Router.extend({
  routes: {
    'menu/:id': 'displayItem',
  },
  displayItem: function(id) {
    this.detailsView = new ItemDetailsView({
      model: App.menu.get(id),
    });

    this.detailsView.render();
    this.$content = $('#content');
    this.$content.html(this.detailsView.el);
    this.renderCart();
  },
  index: function() {
    // this.indexView = new IndexView();
    // this.indexView.render();
    this.$content = $('#content');
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
    if (App.cart.length > 0) {
      this.cartView = new CartView({
        collection: App.cart,
      });

      $('#cart').slideDown();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, 'index');
    
  },
});