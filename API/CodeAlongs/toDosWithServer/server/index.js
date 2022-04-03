const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

//built in body parser:
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('../client')) //allows us to access contents inside "client" folder

const {todoArray} = require('./fakeData')

//can only use two routes - /todos or /todos/<id>

//BASE ROUTE
app.get("/", (req, res) => {
    res.send("Root route");
  });

//READ - GET
app.get('/todos', (req, res) => {
    if (todoArray.length > 0){
        res.status(200).json(todoArray);
    } else {
    res.status(200).json({message: "Nothin to do!"})
    }
})

//CREATE - POST <--Adds a new todo to the list
let newID = 4;
app.post('/todos', (req, res) =>{
    let newTodo = {
        id: newID++,
        description: req.body.description,
        isComplete: false,
    };
    todoArray.push(newTodo);        //put newTodo into the todo array
    res.status(200).json(newTodo);  
});

//DELETE - DELETE 
app.delete('/todos/:id', (req, res) => {
    let todosID = parseInt(req.params.id);
    let todosIDindex = todoArray.findIndex((todo) => {
        return todosID === todo.id;
    });
    if(todosIDindex !== -1)
        todoArray.splice(todosIDindex, 1);
    res.status(200).json(todoArray);
});

//UPDATE - PUT
app.put('/todos/:id', (req, res) => {
    let todosID = parseInt(req.params.id);
    let requestedTodo = todoArray.find((todo) => {
        return todo.id === todosID;
    })
    if(requestedTodo){
        requestedTodo.isComplete = !requestedTodo.isComplete; //makes the iscomplete toggle from false to true or back
        res.status(200).json(requestedTodo)
    } else{
        res.status(404).json({message: "ID does not exist in database"})
    };
});


const port = process.env.PORT || 3003;
app.listen(port, () => {console.log(`running on ${port}`)})