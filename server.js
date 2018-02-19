const migrate = require('migrate');
const express = require('express');
const server = express();
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const bundle =  require('./public/js/army-builder-server.bundle.js');
const quotes = require('./app/controllers/quotes');

const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./app/views/pages/army-builder-index.html', 'utf-8')
});

var db;
mongodb.MongoClient.connect(uri, (err, client) => {
  if (err) throw err;
  db = client.db(dbName);
});

migrate.load({
  stateStore: '.migrate'
}, function (err, set) {
  if (err) {
    throw err
  }
  set.up(function (err) {
    if (err) {
      throw err
    }
    console.log('migrations successfully ran')
  })
})

server.use(express.static(__dirname + '/public'));
server.set('port', (process.env.PORT || 5000));
// I need to set my content headers
// server.use(helmet());

server.use('/quotes', quotes);

// views is directory for all template files
server.set('views', 'app/views');
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
  response.render('pages/index');
});

// TODO move to controller file
server.get('/rs/getGermanArmyData', (request, response) => {
  db.collection('army').find().toArray((err, result) => {
    response.send(result);
  });
});

server.get('/bolt-action', (request, response) => {
  bundle.default({ url: request.url }).then((app) => {    

    const context = {
      title: 'Bolt Action - Army Builder'
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

server.get('/design', (request, response) => {
  response.render('pages/design');
});

server.get('/ar', (request, response) => {
  response.render('pages/ar');
});

server.listen(server.get('port'), () => {
  console.log('Node app is running on port', server.get('port'));
  //console.log(`This process is pid ${process.pid}`);
});


