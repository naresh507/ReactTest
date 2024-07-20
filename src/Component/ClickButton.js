// src/ClickButton.js
import React, { useState } from 'react';

const ClickButton = () => {
  const [message, setMessage] = useState('Hello, World!');

  const handleClick = () => {
    setMessage('HI I am Button Click');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default ClickButton;
