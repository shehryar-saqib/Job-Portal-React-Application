import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  

export const Contact = (props) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="contact_header">Contact Us!</h2>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Message</label>
            <textarea rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Write your concern..." id="message" name="message"></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
    
    )
}