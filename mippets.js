var express = require('express');
var app = express.createServer(
  express.logger(),
  express.bodyParser(),
  express.cookieParser(),
  express.session({secret: process.env.SESSION_SECRET || 'secret'}),
  express.static(__dirname + '/public')
);

app.register('.haml', require('hamljs'));
app.set('view engine', 'haml');

app.get('/', function(request, response) {
  response.render("index");
});

app.listen(process.env.PORT || 3000)

