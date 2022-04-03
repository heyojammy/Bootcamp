import axios from "axios";
import {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: ""
  }); //initial State of the form is a blank field (empty string)

  const handleChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault() //prevents it from submitting a new get request
    axios.post('http://localhost:8080/new', formData)
      .then(response => console.log(`Response data: ${response.data}`))
      .catch(error => console.log(`Error: ${error}`))
  }

  return (
  <div>
    <h1>MERN</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor='fname'>First Name: </label>
      <input type="text"
            name="fname"
            id="fname"
            onChange={handleChange}/>
      <input type="text"
            name="lname"
            id="lname"
            onChange={handleChange}/>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
  );
}

export default App;
