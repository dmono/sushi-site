var CartView = Backbone.View.extend({
  id: 'cart',
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
  render: function() {
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
  checkVisibility: function() {
    if ($('#cart:hidden').length === 0 || this.collection.length > 0) {
      this.$el.slideDown();
    }
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'update change reset', this.render.bind(this));
    this.listenTo(this.collection, 'add', this.checkVisibility);
  },
});