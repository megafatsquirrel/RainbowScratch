const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

module.exports.up = function (next) {
  const data = [
    {
      nation: 'germany',
      category: 'infantry',
      type: 'headquarters',
      unit: 'forward observer',
      cost: [{name: 'artillery forward observer', values: [{name: 'regular', value: 100},
                                                         {name: 'veteran', value: 115}]},
             {name: 'air force forward observer', values: [{name: 'regular', value: 75}, 
                                                        {name: 'veteran', value: 90}]} 
      ],
      team: '1 forward observer and up to 2 further men',
      composition: '',
      damageValue: '',
      weapons: ['pistol', 'submachine gun', 'rifle', 'assault rifle'],
      options: [{option: 'extra men', 
                 values: [{name: 'regular', value: 10}, 
                          {name: 'veteran', value: 13}, 
                          {name: 'max', value: 2}]
                }],
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
                              unit: 'forwardObserver'}, (err) => {
      if (err) throw err;
    });

    client.close((err) => {
      if(err) throw err;
    });
  });
  next()
}
