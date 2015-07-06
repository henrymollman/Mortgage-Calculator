var request = require('request');

var zillow = {};

zillow.getMortgageInfo = function(req, res) {
  var input = req.query;
  var apiKey = process.env.zillow;
  var url = 'http://www.zillow.com/webservice/mortgage/CalculateAffordability.htm?' + apiKey 
    + '&annualincome=' + input['income']
    + '&monthlypayment=' + input['payment']
    + '&down=' + input['down']
    + '&monthlydebts=' + input['debts']
    + '&schedule=yearly&term=360'
    + '&estimate=false&output=json';

  request(url, function (error, response, body) {
    if (error) {
      console.log(error)
    }
    else if (!error && response.statusCode == 200) {

      var sched = JSON.parse(body);
      sched = sched.response;
      var removeDash = new RegExp('^-');
      var keys = Object.keys(sched.annualAmortizationSchedule[0]);
      var length = keys.length;
      sched.annualAmortizationSchedule.forEach(function(item) {
        for (var i = 0; i < length; i++) {
          item[keys[i]] = item[keys[i]].replace(removeDash, '$');
        }
      });
      res.send(sched);

  }
})

};
  
module.exports = zillow;