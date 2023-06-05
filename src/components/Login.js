import React, { useState } from "react";
import { useNavigate, BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/users?email=${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data.length > 0 && data[0].password === password) {
              
              console.log('Login success:', data[0]);
              navigate(`/home?email=${email}`);
              
             
              // Redirect the user to the dashboard or some other page
            } else {
                document.getElementById("hello").innerHTML="Invalid"
              console.error('Invalid email or password');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h2 id="hello">Login</h2>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
                <button className="link-btn"><Link to="/register">Don't have an account? Register here please.</Link></button>
            </form>
        </div>
    )
}