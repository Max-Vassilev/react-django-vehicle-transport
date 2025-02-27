import React from 'react';

const Buttons = () => {
  return (
    <div className="buttons-container">
      <a href="http://localhost:5173/login/" className="button login">Login</a>
      <a href="http://localhost:5173/register/" className="button register">Register</a>
      <a href="http://localhost:5173/logout/" className="button logout">Logout</a>
    </div>
  );
}

export default Buttons;