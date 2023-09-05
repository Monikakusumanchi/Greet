import logo from './logo.svg';
import './App.css';
import React from 'react';
import Carousel from './Carousel';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <div className="left-column">
        <Carousel />
      </div>
      <div className="right-column">
        <Message />
      </div>
      <div className="letter">
        <p className="letter-paragraph">Dear Teacher,</p>
        <p className="letter-paragraph">Thank you for your patience and understanding, for pushing me to be my best self, and for believing in me even when I didn't believe in myself.</p>
        <p className="letter-paragraph">Yours Sincerely,</p>
        <p className="letter-paragraph">Monika</p>
      </div>
    </div>
  );
}

export default App;
