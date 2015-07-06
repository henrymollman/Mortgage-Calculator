
var ScheduleView = Backbone.View.extend({

  el: '<table class="table table-bordered"><caption>Payment Schedule</caption><tr><th>Period</th><th>Beginning Balance</th><th>Amount</th><th>Principal</th><th>Interest</th><th>Ending Balance</th></tr></table>',

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
    var sched = this.collection.models[0].attributes.annualAmortizationSchedule;
    var rows = sched.map(function(schedule) {

      return self.template(schedule);
    });
    this.$el.append(rows);
  }

});

