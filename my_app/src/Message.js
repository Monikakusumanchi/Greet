import React from 'react';


const headingStyle = {
    fontFamily: 'swishes-display',
    fontStyle: 'normal',
    fontWeight: '300',
  };
function Message() {
  return (
    <div className="message">
      <h1 style={headingStyle}>Happy Teachers Day!</h1>
      <p>Thank you for your dedication and hard work.</p>
    </div>
  );
}

export default Message;
