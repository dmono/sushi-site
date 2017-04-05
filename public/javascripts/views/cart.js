var CartView = Backbone.View.extend({
  template: App.templates.cart,
  events: {
    'click a.empty_cart': 'emptyCart',
    'click a.checkout': 'checkout',
  },
  emptyCart: function(e) {
    e.preventDefault();

  },
  checkout: function(e) {
    e.preventDefault();
    
  },
  renderCart: function() {
    this.$el.html(this.template());
    this.collection.each(this.renderCartItem.bind(this));
  },
  renderCartItem: function(item) {
    var cartItem = new CartItemView({
      model: item,
    });

    this.$('ul').append(cartItem.el);
  },
  initialize: function() {
    this.renderCart();
  },
});