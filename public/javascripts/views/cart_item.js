var CartItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.cart_item,
  events: {
    'click': 'removeItem',
  },
  removeItem: function(e) {
    var id = $(e.currentTarget).attr('data-id');
    App.cart.trigger('destroy', id);

    if (App.cart.length === 0) {
      $('#cart').slideUp();
    }
  },
  render: function() {
    var id = this.model.get('id');
    this.$el.attr('data-id', id);
    this.$el.html(this.template(this.model.toJSON()));

    return this.el;
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  },
});