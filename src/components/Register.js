import React, { useState } from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      password: pass,
      joblist: [],
    };
    
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        navigate('/');
        console.log('Success:', data);
        // Redirect the user to the desired page
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="name">Full name</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Sign Up</button>
        <button className="link-btn"><Link to="/">Already have an account? Log in.</Link></button>
      </form>
    </div>
  );
}
