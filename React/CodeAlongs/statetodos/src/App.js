import {useState} from 'react'
import './App.css';

//Generates the list item and all its attributes
const TodoItem = ({todoObj, toggleComplete}) => (
  <li 
    onClick={toggleComplete} 
    className={todoObj.isComplete ? "completed" : "not"}
  >
    {todoObj.description}
  </li>
)

//Holds render and state requirements/features
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Save all cats",
      isComplete: false
    }, 
    {
      id: 2,
      description: "Get a yerba matte cup from Argentina",
      isComplete: false
    }
  ]) 
  const [newTodo, setNewTodo] = useState('') //newTodo comes in as a string based on user input and then is stored in the todos array

//sets the state of newToDo whenever the user enters/types something
  const handleChange = event => { 
    setNewTodo(event.target.value)
  }

//transfers data entered by user to the todo array
const handleSubmit = event => {
  event.preventDefault()
  const newTodos = [...todos, { id: Date.now(), description: newTodo, isComplete: false}]
  setTodos(newTodos)
  setNewTodo('')
}

//Mark a todo with a strike through
const handleClick = (id) => {
 // update the state with the appropriate todo item's completion property flipped
  // update the state
  setTodos(prevTodos => {
    // find the relevant todo object using the id
    let clickedTodoIndex = prevTodos.findIndex(t => t.id == id);
    // change it's isComplete
    prevTodos[clickedTodoIndex].isComplete = !prevTodos[clickedTodoIndex].isComplete;
    console.log(prevTodos[clickedTodoIndex].isComplete)
    return prevTodos;
  })
}

//Array where todos are stored
  const todoList = todos.map(todoObj => (
    <TodoItem 
      key={todoObj.id} 
      todoObj={todoObj}
      toggleComplete={() => {
        handleClick(todoObj.id) //event is a PROP passed down through the item
      }} 
    />
  ));

//Items to be rendered - HTML-like elements
return (
  <div className="App">
    <h1>My Bucket List</h1>
    <form onSubmit={handleSubmit}>
      <input 
        className="todo-input"
        autoComplete="off"
        type="text"
        name="newTodo"
        placeholder="My next bucket list item"
        onChange={handleChange}
        value={newTodo}
      />
      <button type="submit" className="save-button">SAVE</button>
    </form>
    <div className="todo-content">
      <ol>
        { todoList }
      </ol>
    </div>
  </div>
);
}


export default App;
