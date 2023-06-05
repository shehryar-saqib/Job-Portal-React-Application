import React from "react";
import { ReactDOM } from "react-dom/client";
import { useState } from "react";
import './App.css';
import './components/Header.css';
// import './components/Footer.css';
import './components/Contact.css';
import './components/AboutPage.css';
import {AboutPage} from './components/AboutPage';
import { HomePage } from "./components/HomePage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Header} from "./components/Header";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import {Routing} from "./Routing";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
  return (
    <div className="App">
      <Header />
      <br></br><br></br><br></br>
      <Routing />
      <br></br><br></br><br></br>
      <Footer />
    </div>
  );
}

export default App;

