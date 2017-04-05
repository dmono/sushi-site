var CartItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.cart_item,
  events: {
    'click figure': 'destroyItem',
  },
  destroyItem: function(e) {
    console.log('destroy me!');
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