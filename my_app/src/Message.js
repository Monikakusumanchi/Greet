import React from 'react';


const headingStyle = {
    fontFamily: 'swishes-display',
    style:'bold',
    fontStyle: 'normal',
    fontWeight: '300',
  };
function Message() {
  return (
    <div className="message">
      <h1 style={headingStyle}>Happy Teachers Day!</h1>
      <h2 style={{ fontWeight: 'bold' }}>--Venkatesh Tadinada Sir</h2>
      <div className="letter bottom">
        <p className="letter-paragraph">Dear Teacher,</p>
        <p className="letter-paragraph">Thank you for your patience and understanding, for pushing me to be my best self, and for believing in me even when I didn't believe in myself.</p>
        <p className="letter-paragraph" >I am truly grateful for all that you do.</p>
        <p className="letter-paragraph">Thank you for being an incredible teacher!</p>
        <p className="letter-paragraph">Yours Sincerely,</p>
        <p className="letter-paragraph">Monika Kusumanchi</p>
      </div>
    </div>
  );
}

export default Message;
