const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'character-sheets';

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);

    // db.collection('player-characters').insertOne({
    //   name: 'Bernard',
    //   race: 'Human',
    //   class: 'Bard',
    // });

    db.collection('player-characters').insertMany(
      [
        {
          name: 'Elomere',
          race: 'Elf',
          class: 'Monk',
        },
        {
          name: 'Aldrith',
          race: 'Human',
          class: 'Fighter',
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert documents');
        }
        console.log(result.ops);
      }
    );
  }
);
