var CheckoutView = Backbone.View.extend({
  id: 'checkout',
  template: App.templates.checkout,
  events: {
    'submit' : 'submitOrder',
  },
  submitOrder: function(e) {
    e.preventDefault();
  },
  render: function() {
    this.collection.updateValues();
    
    this.$el.html(this.template({ total: this.collection.total }));
    this.collection.each(this.renderItem.bind(this));
    $('span.count').text(this.collection.quantity);
  },
  renderItem: function(item) {
    var checkoutItem = new CheckoutItemView({
      model: item,
    });

    this.$('tbody').append(checkoutItem.el);
  },
  initialize: function() {
    this.listenTo(this.collection, 'change', this.render.bind(this));
    this.render();
  },
});