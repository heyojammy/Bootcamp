import React from 'react';
import './App.css';
import Videos from './components/videos';
import Links from './components/links';
import Cameos from './components/cameos';
import Intro from './components/intro';

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/Assets/hug.png)"}}>
     <Intro/>
     <Cameos/>
     <Links/>
     <Videos/>
    </div>
  );
}

export default App;