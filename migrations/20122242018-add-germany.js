const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

module.exports.up = function (next) {
  
  mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) throw err;

    let db = client.db(dbName);
    db.createCollection('germany');
    
    client.close((err) => {
      if(err) throw err;
    });
  });
  next();
}

module.exports.down = function (next) {
  mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) throw err;

    let db = client.db(dbName);
    let germanyCollection = db.collection('germany');

    germanyCollection.drop((err) => {
      if (err) throw err;
    });

    client.close((err) => {
      if(err) throw err;
    });
  });
  next()
}
