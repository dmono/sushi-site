var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    console.log(item.get('id'));
  },
  initialize: function() {

  }
});