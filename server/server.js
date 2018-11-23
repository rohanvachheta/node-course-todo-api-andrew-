//library install modules 
var express= require('express');
var bodyparser= require('body-parser');
const {ObjectID} =require('mongodb');

//local_imports 
var {mongoose} = require('./db/mongoose.js');
var {Todo}= require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });
    
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
         res.status(400).send(e);
    });
});
// app.post('/user',(req,res)=>{
//     var user=new User({
//         email:req.body.text
//     });
//     user.save().then((doc)=>{
//         res.send(doc);
//     },(e)=>{
//         res.status(400).send(e);
//     });
// });

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
  });
  
  app.get('/todos/:id', (req, res) => {
     // res.send(req.params);
        var id =req.params.id;

        if(!ObjectID.isValid(id)){

            return res.status(400).send('not valid id');

        }
        Todo.findById(id).then((todo)=>{
            if(!todo){
                return res.status(400).send('not available id details');
            };
            res.send({todo});
        }).catch((e)=>{
            res.status(400).send;
        });



  });

//get to read will do that lateer
app.listen(port,()=>{
    console.log('started on server ',port);
});
module.exports.app =app;


