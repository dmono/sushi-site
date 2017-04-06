var IndexView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.collection.each(this.renderItem.bind(this));
  },
  renderItem: function(item) {
    var itemView = new ItemView({
      model: item,
    });

    this.$el.append(itemView.el);
  },
  initialize: function() {
    this.$el.attr('id', 'items');
    this.render();
  },
});