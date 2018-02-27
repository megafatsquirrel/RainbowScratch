const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

module.exports.up = function (next) {
  const data = [
    {
      nation: 'germany',
      category: 'infantry',
      type: 'headquarters',
      unit: 'medic',
      cost: [
        {medic: [{veteran: 65}]}
      ],
      team: '1 medic and up to 2 further men',
      composition: '',
      damageValue: '',
      weapons: ['pistol', 'none'],
      options: [{option: 'extra men'}, {regular: 8, max: 2}],
      specialRules: ''
    }
  ];
  mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) throw err;

    let db = client.db(dbName);
    let germanyCollection = db.collection('germany');

    germanyCollection.insert(data, (err, result) => {
      if (err) throw err;
    });

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

    germanyCollection.remove({nation: 'germany',
                              category: 'infantry',
                              type: 'headquarters',
                              unit: 'medic'}, (err) => {
      if (err) throw err;
    });

    client.close((err) => {
      if(err) throw err;
    });
  });
  next()
}
