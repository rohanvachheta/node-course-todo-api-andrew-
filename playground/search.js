const {MongoClient ,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
    if(err){
        return console.log('we could not connect to the servver bro >',err);
    }
    console.log('server connected');

    const db=client.db('TodoApp2');
    db.collection('Users2').find({name: 'kayse'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
      });


});