var CartView = Backbone.View.extend({
  el: $('div#cart')[0],
  template: App.templates.cart,
  events: {
    'click a.empty_cart': 'emptyCart',
  },
  emptyCart: function(e) {
    e.preventDefault();
    this.$el.slideUp();
    $('span.count').text('0');
    this.collection.trigger('empty');
  },
  renderCart: function() {
    this.collection.updateValues();

    this.$el.html(this.template({ total: this.collection.total }));
    this.collection.each(this.renderCartItem.bind(this));
    $('span.count').text(this.collection.quantity);
  },
  renderCartItem: function(item) {
    var cartItem = new CartItemView({
      model: item,
    });

    this.$('ul').append(cartItem.el);
  },
  initialize: function() {
    this.renderCart();
    this.listenTo(this.collection, 'update change reset', this.renderCart.bind(this));
    // this.listenTo(this.collection, 'change', this.renderCart.bind(this));
    // this.listenTo(this.collection, 'reset', this.renderCart.bind(this));
    this.listenTo(this.collection, 'add', App.router.renderCart);
  },
});