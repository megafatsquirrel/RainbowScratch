const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;

mongodb.MongoClient.connect(uri, function(err, client) {
    if (err) throw err;
});