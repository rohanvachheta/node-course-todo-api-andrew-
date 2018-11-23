const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
  

  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp2');


  // Insert new doc into Users (name, age, location)
  db.collection('Users2').insertOne({
    name: 'kayse',
    age: 25,
    location: 'delphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);

  });

  client.close();
});
