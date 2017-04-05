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
    this.cartView = new CartView({
      collection: App.cart,
    });

    $('#cart').html(this.cartView.el);
  },
  initialize: function() {
    this.route(/^\/?$/, 'index');
    
  },
});