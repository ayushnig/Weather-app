// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
//connect to our database
//Ideally you will obtain DB details from a config file




app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

  app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
module.exports = app;
