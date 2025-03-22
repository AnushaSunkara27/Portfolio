import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="section">
        <h1>Hi, I'm Anusha 👋</h1>
        <img src="/profile.jpg" alt="Anusha" className="profile-pic" />
        <p>Welcome to my personal portfolio!</p>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <p>Describe your roles at Goldman Sachs, Walgreens, Amazon, etc.</p>
      </section>

      <section id="resume" className="section">
        <h2>Resume</h2>
        <a href="/Anusha_Resume.pdf" target="_blank" className="resume-btn">View My Resume</a>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: anusha@example.com</p>
        <p>LinkedIn: linkedin.com/in/anusha</p>
      </section>
    </div>
  );
}

export default App;
