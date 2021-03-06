var express = require('express');
var config = require('./config');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', { title: 'Money' });
});

var server = app.listen(config.server.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
