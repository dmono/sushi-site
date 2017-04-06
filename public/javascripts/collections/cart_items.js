var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    var existingItem = this.get(item.get('id'));
    var quantity;
    var total;

    if (existingItem) {
      quantity = existingItem.get('quantity') + 1;
      total = quantity * existingItem.get('price');
      existingItem.set('quantity', quantity).set('total', total);
      this.add(existingItem, { merge: true });
    } else {
      this.add(item.clone().set('quantity', 1)).set('total', item.get('price'));
    }
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
    if (this.length > 0) {
      this.quantity = this.getQuantity();
      this.total = this.getTotal();
    } else {
      this.quantity = 0;
      this.total = 0;
    }
  },
  initialize: function() {
    this.on('destroy', this.destroyItem);
    this.on('empty', this.emptyCart);
  }
});