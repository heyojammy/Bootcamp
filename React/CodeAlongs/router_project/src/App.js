import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <hr />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
