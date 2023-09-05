import logo from './logo.svg';
import './App.css';
import React from 'react';
import Carousel from './Carousel';
import Message from './Message';
import audioFile from './compress.mp3';
function App() {
  return (
    <div className="App">
      <div className="left-column">
        <Carousel />
        
      </div>
      <div className="right-column">
        <Message />
        <audio autoPlay controls >
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
     
      </div>
    </div>
  );
}

export default App;
