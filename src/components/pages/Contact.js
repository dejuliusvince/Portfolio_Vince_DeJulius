import React from 'react';

export default function Contact() {
  return (
    
      <div className="container">
      <h1>Contact</h1>

      <form>
        <p>Name:</p>
        <input className="w-50" placeholder="Please enter your name"></input>
        <p>Email Address:</p>
        <input className="w-50" placeholder="please enter your email"></input>
        <p>Message:</p>
        <input className="w-50" placeholder="Please enter a message (optional)" ></input>
      </form>

      
      </div>
    
  );
}
