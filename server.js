const express = require('express');
const server = express();
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const bundle =  require('./public/js/server.bundle.js');
const quotes = require('./app/controllers/quotes');

const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./app/views/pages/index.html', 'utf-8')
});

server.use(express.static(__dirname + '/public'));
server.set('port', (process.env.PORT || 5000));
// I need to set my content headers
// server.use(helmet());

server.use('/quotes', quotes);

// views is directory for all template files
// server.set('views', 'app/views');
// server.set('view engine', 'ejs');

server.get('*', (request, response) => {
  bundle.default({ url: request.url }).then((app) => {    
    //context to use as data source
    //in the template for interpolation
    const context = {
      title: 'Vue JS - Server Render',
      meta: `
        <meta description="vuejs server side render">
      `
    };

    renderer.renderToString(app, context, (err, html) => {   
      if (err) {
        if (err.code === 404) {
          response.status(404).end('Page not found')
        } else {
          response.status(500).end('Internal Server Error')
        }
      } else {
        response.end(html)
      }
    });        
  }, (err) => {
    console.log(err);
  });
});

// app.get('/design', function(request, response) {
//   response.render('pages/design');
// });

// app.get('/ar', function(request, response) {
//   response.render('pages/ar');
// });

server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});


