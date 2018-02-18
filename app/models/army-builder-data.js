const mongodb = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const seedData = [
    {
        type: 'HQ unit',
        name: 'Officer',
        cost: [ {name: 'Second Lieutentant', regular: 50, veteran: 65}, 
                {name: 'First Lieutentant', regular: 75, veteran: 90} ],
        team: '1 officer and up to 2 additional men',
        weapons: [ 'pistol', 'submachine gun', 'rifle', 'assault rifle' ],
        options: [ {name: 'Bodyguard', regular: 10, veteran: 13} ]
    }
];

mongodb.MongoClient.connect(uri, (err, client) => {
    if (err) throw err;

    let db = client.db(dbName);
    let army = db.collection('army');

    // TODO setup migration for db
    // army.insert(seedData, (err, result) => {
    //     if (err) throw err;
    // });
});