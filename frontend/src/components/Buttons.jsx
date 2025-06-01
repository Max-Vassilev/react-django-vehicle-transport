import React from 'react';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <a href="http://23.22.149.131:5173/login/" className="button login">Login</a>
      <a href="http://23.22.149.131:5173/register/" className="button register">Register</a>
      <a href="http://23.22.149.131:5173/logout/" className="button logout">Logout</a>
    </div>
  );
}

export default Buttons;