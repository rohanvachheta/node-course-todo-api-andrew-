const {mongoose} =require('../server/db/mongoose');
const {ObjectID} =require('mongodb');
const {Todo}= require('../server/models/todo');

var id="bf6a671ff9a43386455214d";

if(!ObjectID.isValid(id)){
    return console.log('id not valid');
}



// Todo.find({
//     _id:id
// }).then((con)=>{
//     console.log(con);
// });

// Todo.findOne({
//     _id:id
// }).then((con)=>{
//     console.log(con);
// });

Todo.findById(id).then((con)=>{
    if(!con){
        return console.log('id not found');

    };
    console.log(con);
}).catch((e)=>{
    console.log(e);
});

 