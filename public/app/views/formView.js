
var FormView = Backbone.View.extend({

  el: '<div class="container">\
  <h2>Mortgage Affordability Calculator</h2>\
  <form role="form" action="/xml" method="POST">\
    <div class="form-group">\
      <label for="income">Annual Income</label>\
      <input type="text" class="form-control" id="income" value="">\
    </div>\
    <div class="form-group">\
      <label for="payment">Monthly Payment</label>\
      <input type="text" class="form-control" id="payment" value="">\
    </div>\
    <div class="form-group">\
      <label for="down">Down Payment</label>\
      <input type="text" class="form-control" id="down" value="">\
    </div>\
    <div class="form-group">\
      <label for="debts">Monthly Debts</label>\
      <input type="text" class="form-control" id="debts" value="">\
    </div>\
  </form>\
    <button id="submit" class="btn btn-default">Submit</button>\
</div>',

  events: {
    'click #submit' : 'submitForm'
  },

    initialize: function() {

    this.collection.on('reset', function () {
        this.render();
    }, this);
  },

  submitForm: function() {
    var data = {
    income: $('#income').val(),
    payment: $('#payment').val(),
    down: $('#down').val(),
    debts: $('#debts').val()
    };
    this.collection.getSchedule(data);
  },

  initialize: function() {
    this.render();
    this.collection.on('reset', function () {
      this.$el.empty();
    }, this);
  },

  render: function() {

  }
});
