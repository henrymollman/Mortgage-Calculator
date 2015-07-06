var PaySchedule = Backbone.Collection.extend({

  model: Payment,
  url: '/api/zillow',

  getSchedule: function(data) {
    this.fetch({data: data, reset: true})
  },



});