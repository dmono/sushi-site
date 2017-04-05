var ItemView = Backbone.View.extend({
  template: App.templates.item,
  tagName: 'li',
  events: {
    'click header': 'viewItem',
    'click footer': 'addToCart',
  },
  viewItem: function() {
    var id = this.model.get('id');
    App.router.navigate('/menu/' + id, { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('addCartItem', this.model);
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