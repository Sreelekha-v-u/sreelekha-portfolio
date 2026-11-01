import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">SREELEKHA V U</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="home">
        <div className="home-content">
          <h3>Hello, I'm</h3>
          <h1>SREELEKHA V U</h1>
          <h2>Passionate DevOps Learner</h2>
          <p>
            Welcome to my personal portfolio website.
            I love creating simple and beautiful websites.
          </p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hello! My name is Sreelekha. I am a IT professional transitioning towards DevOps Engineering.
I am building my DevOps skills through continuous learning and hands-on practice, focusing on real-world tools, 
automation, cloud technologies, and CI/CD practices.


        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill">Git & GitHub</div>
          <div className="skill">LINUX</div>
          <div className="skill">networking</div>
          <div className="skill">shell scripting</div>
          
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website using React and CSS.</p>
          </div>

          <div className="project-card">
            <h3>Landing Page</h3>
            <p>A simple and responsive landing page design.</p>
          </div>

          
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: sreelekhavudevops@gmail.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
        <p>Location: Kerala, India</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Sreelekha. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App
