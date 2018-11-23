const {MongoClient ,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
    if(err){
        return console.log('we could not connect to the servver bro >',err);
    }
    console.log('server connected');
    const db=client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({
        name:'kayse'
    },
    {
        $set :{
            age:333
        }
    },{
        returnOriginal :false
    }
    ).then((result)=> {
        console.log(result);
    });

});