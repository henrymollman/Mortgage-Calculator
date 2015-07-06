// SongQueueView.js - Defines a backbone view class for the song queue.
var TableView = Backbone.View.extend({

  id: 'zillow',
  className: 'col-md-7',

  template: _.template('<h1 class="payment">Mortgage Details</h1>\
                        <h2>Affordability Amount</h2><p><%= affordabilityAmount %></p>\
                        <h2>Monthly Principal and Interest</h2><p><%= monthlyPrincipalAndInterest %></p>\
                        <h2>Monthly Property Taxes</h2><p><%= monthlyPropertyTaxes %></p>\
                        <h2>Monthly Hazard Insurance</h2><p><%= monthlyHazardInsurance %></p>\
                        <h2>Monthly PMI</h2><p><%= monthlyPmi %></p>\
                        <h2>Monthly HOA Dues</h2><p><%= monthlyHoaDues %></p>\
                        <h2>Total Monthly Payment</h2><p><%= totalMonthlyPayment %></p>\
                        <h2>Total Payments</h2><p><%= totalPayments %></p>\
                        <h2>Total Principal</h2><p><%= totalPrincipal %></p>\
                        <h2>Total Tax, Fees and Insurance</h2><p><%= totalTaxesFeesAndInsurance %></p>\
                        <h2>Monthly Income</h2><p><%= monthlyIncome %></p>\
                        <h2>Monthly Debts</h2><p><%= monthlyDebts %></p>\
                        <h2>Monthly Income Tax</h2><p><%= monthlyIncomeTax %></p>\
                        <h2>Monthly Remaining Budget</h2><p><%= monthlyRemainingBudget %></p>'),

  initialize: function() {

    this.collection.on('reset', function () {
      console.log('called reset!')
      this.schedule = new ScheduleView({
        collection: this.collection
      });
    this.render();
    }, this);
        


  },


  render: function() {
  this.$el.empty();
  console.log('rendering schedule view')
  this.$el.append(this.template(this.collection.models[0].attributes));
  this.schedule.$el.appendTo($('#app'));
  }

});
