var Payment = Backbone.Model.extend({
  defaults: {
    affordabilityAmount: "",
    monthlyPrincipalAndInterest: "",
    monthlyPropertyTaxes: "",
    monthlyHazardInsurance: "",
    monthlyPmi: "",
    monthlyHoaDues: "",
    totalMonthlyPayment: "",
    totalPayments: "",
    totalPrincipal: "",
    totalTaxesFeesAndInsurance: "",
    monthlyIncome: "",
    monthlyDebts: "",
    monthlyIncomeTax: "",
    monthlyRemainingBudget: "",
    schedule: [{
      period: "", 
      beginningBalance: "", 
      amount: "", 
      principal: "", 
      interest: "", 
      endingBalance: ""  
    }]
  },

  initialize: function() {

  }
  
});