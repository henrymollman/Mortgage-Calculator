var express = require('express');
var router = express.Router();
var zillow = require('../utils/zillow.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.send('index.html');
});

router.get('/api/zillow', function(req, res) {
    console.log('hello!!!');
    console.log(req.body);
    zillow.getMortgageInfo(req, res);
});

router.post('/xml', function(req, res) {
  console.log(req.body);
  zillow.getMortgageInfo(req, res);
})

module.exports = router;

