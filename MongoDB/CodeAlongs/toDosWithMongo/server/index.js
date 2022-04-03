const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

//built in body parser:
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('../client')) //allows us to access contents inside "client" folder

//How to convert to Mongo/Mongoose
// 1. Build our connection
//      a. install mongoose
//      b. connect

const mongoose = require('mongoose')
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI)
.then(() => console.log('Connected to Mongo database'))
.catch(err => console.log(`Error connecting to database ${err}`))

//Blueprints: 
//  a) Schema
//  b) Model
let todoSchema = mongoose.Schema({
        //id: Number, <--don't need to include ID bc Mongoose will auto-include it from our ToDo JSON file
        description: String,
        isComplete: {
            type: Boolean,
            default: false
        }
})

let TodoModel = mongoose.model('todos', todoSchema)

//Write Queries


//BASE ROUTE
app.get("/", (req, res) => {
    res.send("Root route");
  });

//READ - GET
app.get('/todos', (req, res) => {
    TodoModel.find({}, (err, results) => {
        if(err){
            console.log('There is an error reading from the database') //tells devs there's an error
            res.status(400).json("There is an error reading from the database") //tells client there's an error
        } else{
            if (results.length > 0){
                res.status(200).json(results); 
            } else {
            res.status(200).json({message: "Nothin to do!"})
            }
        }
    })
})

//CREATE - POST <--Adds a new todo to the list
//let newID = 4; <--Mongo will create new ID automatically
app.post('/todos', (req, res) =>{
let newTodo = new TodoModel({
    description: req.body.description,
})
    newTodo.save((err, result) => {
        if(err){
            console.log(`Error adding to database ${err}`)
            res.status(400).json("There is an error posting to the database")
        } else {
            console.log(`Success: ${result}`)
            res.status(200).json(result); 
        }
    }) 
});

//DELETE - DELETE 
app.delete('/todos/:id', (req, res) => {
    let todosID = parseInt(req.params.id); //<-- keep this line bc we need to know which ID to delete
    TodoModel.findByIdAndDelete(requestedId, (err, result) => {
        if(err){
            console.log(`Error deleting item from database ${err}`)
            res.status(400).json("There is an error deleting from the database")
        } else {
            console.log(`Result: ${result}`)
            res.status(200).json(result);
        }
    })
});

//UPDATE - PUT
app.put("/todos/:id", (req, res) => {
    let requestedId = req.params.id;
    TodoModel.findById(requestedId, (error, result) => {
      if (error) {
        console.log(`Error updating to database ${error}`);
        res.status(400).json("Error updating to db");
      } else {
        result.isComplete = !result.isComplete; //Toggles status between complete & incomplete when clicked
        result.save((err, updatedTodo) => {
          if (err) {
            console.log(`Error updating document ${error}`);
            res.status(400).json("Error updating document");
          } else {
            res.status(200).json(updatedTodo);
          }
        });
      }
    });
  });


const port = process.env.PORT || 3003;
app.listen(port, () => {console.log(`running on ${port}`)})