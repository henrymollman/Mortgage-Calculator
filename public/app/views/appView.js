var appView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.form = new FormView({
      collection: this.collection
    });
    this.schedule = new TableView({
      collection: this.collection
    });
    this.render();
  },

  render: function() {
    var that = this;
    that.$el.append([
      this.form.$el,
      this.schedule.$el
      ]);
  }
});
