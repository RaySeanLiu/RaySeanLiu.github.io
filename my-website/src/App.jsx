import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">Ray Liu</h1>
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Ray.</h1>
          <p>CS @ NC State</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student interested in...
        </p>
        <div className="skills">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">HTML/CSS</span>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A web application built with modern technologies and best practices.</p>
            <a href="#" className="project-link">Learn more</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <p>An innovative solution to improve everyday workflows.</p>
            <a href="#" className="project-link">Learn more</a>
          </div>

          <div className="project-card">
            <h3>Project Three</h3>
            <p>Exploring new frameworks and technologies through experimentation.</p>
            <a href="#" className="project-link">Learn more</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Message me here.</p>
        <div className="contact-links">
          <a href="mailto:rliu36@ncsu.edu">Email</a>
          <a href="https://github.com/RaySeanLiu">GitHub</a>
          <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Ray Liu</p>
      </footer>
    </div>
  );
}

export default App;