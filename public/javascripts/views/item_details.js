var ItemDetailsView = Backbone.View.extend({
  template: App.templates.details,
  id: "item_details",
  events: {
    'click div.nav': 'changeItem',
    'click a.close': 'closeDetails',
    'click a.add_cart': 'addToCart',
  },
  changeItem: function(e) {
    var id = this.model.get('id');

    if ($(e.currentTarget).hasClass('prev')) {
      id = (id === 1) ? App.menu.length : --id;
    } else {
      id = (id === App.menu.length) ? 1 : ++id;
    }

    App.router.navigate('/menu/' + id, { trigger: true });
  },
  closeDetails: function(e) {
    e.preventDefault();
    App.router.navigate('/', { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('addCartItem', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
});