import logo from './logo.svg';
import './App.css';
import React from 'react';
import Carousel from './Carousel';
import Message from './Message';
const headingStyle = {
  fontFamily: 'Your Selected Font, sans-serif', // Replace with your font name
  fontSize: '2.5rem', // Adjust the font size as needed
};
function App() {
  return (
    <div className="App">
      <div className="left-column">
        <Carousel />
      </div>
      <div className="right-column">
        <Message />
      </div>
      
    </div>
  );
}

export default App;
