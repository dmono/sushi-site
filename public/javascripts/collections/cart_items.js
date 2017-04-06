var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    var model = this.findWhere({ id: item.id }) || item.clone();

    if (model.has('quantity')) {
      this.changeItemQuantity(model, 1);
    } else {
      model.set('quantity', 1).set('total', model.get('price'));
      this.add(model)
    }
  },
  changeItemQuantity: function(model, amount) {
    model.set('quantity', model.get('quantity') + amount);
    model.set('total', model.get('price') * model.get('quantity'));
  },
  destroyItem: function(id) {
    this.get(id).view.remove();
    this.remove(id);
  },
  emptyCart: function() {
    this.reset();
  },
  getQuantity: function() {
    return this.pluck('quantity').reduce(function(a, b) {
      return a + b;
    });
  },
  getTotal: function() {
    return this.pluck('total').reduce(function(a, b) {
      return a + b;
    });
  },
  updateValues: function() {
    this.quantity = this.length > 0 ? this.getQuantity() : 0;
    this.total = this.length > 0 ? this.getTotal() : 0;
  },
  initialize: function() {
    this.on('destroy', this.destroyItem);
    this.on('empty', this.emptyCart);
    this.on('updateQuantity', this.changeItemQuantity.bind(this));
  }
});