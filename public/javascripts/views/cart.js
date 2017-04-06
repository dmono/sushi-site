var CartView = Backbone.View.extend({
  el: $('div#cart')[0],
  template: App.templates.cart,
  events: {
    'click a.empty_cart': 'emptyCart',
    'click a.checkout': 'checkout',
    'click li': 'removeItem',
  },
  emptyCart: function(e) {
    e.preventDefault();
    this.$el.slideUp();
    $('span.count').text('0');
    this.collection.trigger('empty');
  },
  checkout: function(e) {
    e.preventDefault();

  },
  removeItem: function(e) {
    var id = +$(e.currentTarget).attr('data-id');
    this.collection.trigger('destroy', id);
  },
  renderCart: function() {
    this.collection.updateValues.call(this.collection);

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
    this.listenTo(this.collection, 'update', this.renderCart.bind(this));
    this.listenTo(this.collection, 'change', this.renderCart.bind(this));
    this.listenTo(this.collection, 'reset', this.renderCart.bind(this));
    this.listenToOnce(this.collection, 'add', App.router.renderCart);
  },
});