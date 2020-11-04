import './App.css';
import React from 'react';
import profileImage from './img/sel.jpg';

function App() {
  return (
    <div className="App">
      <h1> My name is Salahuddin Hissam</h1>
      <h2>I am trying to create react build app.</h2>
      <img src={profileImage} alt="Hello everyone!" />

    </div>
  );
}

export default App;
