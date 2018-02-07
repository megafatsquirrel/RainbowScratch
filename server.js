var express = require('express');
var helmet = require('helmet');
var app = express();
var quotes = require('./app/controllers/quotes');

app.set('port', (process.env.PORT || 5000));
app.use(helmet());

app.use(express.static(__dirname + '/public'));

app.use('/quotes', quotes);

// views is directory for all template files
app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/design', function(request, response) {
  response.render('pages/design');
});

app.get('/ar', function(request, response) {
  response.render('pages/ar');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


