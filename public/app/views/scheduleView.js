
var ScheduleView = Backbone.View.extend({

  el: '<table id="table" class="col-md-4"><caption>Payment Schedule</caption><tr><th>Period</th><th>Beginning Balance</th><th>Amount</th><th>Principal</th><th>Interest</th><th>Ending Balance</th></tr></table>',

  className: 'col-md-5',

  template: _.template('<tr><td><%= period %></td>\
                        <td><%= beginningBalance %></td>\
                        <td><%= amount %></td>\
                        <td><%= principal %></td>\
                        <td><%= interest %></td>\
                        <td><%= endingBalance %></td></tr>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    var self = this;
    console.log(this.collection);
    var rows = this.collection.models[0].attributes.annualAmortizationSchedule.map(function(schedule) {
      return self.template(schedule);
    });
    this.$el.append(rows);
  }

});

