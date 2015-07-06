var request = require('request');

var zillow = {};

zillow.getMortgageInfo = function(req, res) {
  var input = req.query;
  console.log('input = ' + input);
  var url = 'http://www.zillow.com/webservice/mortgage/CalculateAffordability.htm?zws-id=X1-ZWz1etz94cevwr_94p25'
    + '&annualincome=' + input['income']
    + '&monthlypayment=' + input['payment']
    + '&down=' + input['down']
    + '&monthlydebts=' + input['debts']
    + '&schedule=yearly&term=360'
    + '&estimate=false&output=json';

    console.log('input income = ' + input['income']);
    console.log(url);

  request(url, function (error, response, body) {
    if (error) {
      console.log(error)
    }
    else if (!error && response.statusCode == 200) {

      var sched = JSON.parse(body);
      sched = sched.response;
      res.send(sched);

  }
})

};
  
module.exports = zillow;