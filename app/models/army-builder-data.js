const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;


mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) throw err;

    let db = client.db(dbName);
    let army = db.collection('army');

    // TODO get the data from the collection and output to the front-end

    client.close((err) => {
        if (err) throw err;
    });
});