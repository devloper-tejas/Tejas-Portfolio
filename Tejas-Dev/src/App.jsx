import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-text-left">
        <a target="_blank" href="https://Tejas-Portfolio36.netlify.app">
          TEJAS
        </a>
      </div>
      <ul className="redirection-parent">
        <li className="redirect">Home</li>
        <li className="redirect">About Me</li>
        <li className="redirect">Projects</li>
        <li className="redirect">Contact Me</li>
      </ul>
    </nav>
  );
}

function Section1Text() {
   const {text} = useTypewriter({
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    loop: {},
    typeSpeed: 300,
    backSpeed: 100,
    delaySpeed: 50,
  });

  return (
    <div className="section1-text">
      <div className="inner-text">Hi I am <span>Tejas Bokade</span></div>
      <div className="inner-text2">
        I am a <span className="inner-typer">{Section1Text}{text}<Cursor /></span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="parents-of-section">
        <Section1Text />
        <div className="section2-image"></div>
      </div>
    </div>
  );
}

export default App;