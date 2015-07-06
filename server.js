var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');


var app = express();

app.use(favicon());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});


module.exports = app;
