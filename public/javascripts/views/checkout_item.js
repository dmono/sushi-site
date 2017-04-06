var CheckoutItemView = Backbone.View.extend({
  tagName: 'tr',
  template: App.templates.checkout_item,
  events: {
    'click .fa-minus': 'decreaseQuantity',
    'click .fa-plus': 'increaseQuantity',
  },
  decreaseQuantity: function() {
    if (this.model.get('quantity') > 1) {
      App.cart.trigger('updateQuantity', this.model, -1);
    }
  },
  increaseQuantity: function() {
    App.cart.trigger('updateQuantity', this.model, 1);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr('data-id', this.model.id);
  },
  initialize: function() {
    this.render();
  },
});