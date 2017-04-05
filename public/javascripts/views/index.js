var IndexView = Backbone.View.extend({
  el: $('body > header')[0],
  template: App.templates.index,
  render: function() {
    this.$el.after(this.template);
  }
});