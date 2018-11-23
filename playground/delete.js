
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err){
        return console.log('we found error',err);
    }
    console.log('connect to the database');
    const db=client.db('TodoApp');
    db.collection('Users').deleteMany({
        name: 'Andrew'
    }).then((result) => {
        console.log(result);
    });


})