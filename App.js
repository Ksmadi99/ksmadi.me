import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="fade-up">Your Name</h1>
        <p className="fade-up delay-1">UI/UX Designer</p>
      </header>

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <h2 className="slide-up">Skills</h2>
        <ul>
          <li className="fade-in stagger-1">Wireframing & Prototyping</li>
          <li className="fade-in stagger-2">User Research</li>
          <li className="fade-in stagger-3">Visual Design</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <h2 className="slide-up">Projects</h2>
        <ul>
          <li className="pop stagger-1">
            <strong>App Redesign</strong> - Enhanced user flow for mobile.
          </li>
          <li className="pop stagger-2">
            <strong>Dashboard UI</strong> - Simplified data visualization.
          </li>
        </ul>
      </section>

      {/* Links Section */}
      <footer className="section links">
        <h2 className="slide-up">Connect</h2>
        <div className="link-list fade-in">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://dribbble.com/yourname" target="_blank">Dribbble</a>
          <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
