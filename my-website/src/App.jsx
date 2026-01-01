import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">Your Name</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Your Name</h1>
          <p>Computer Science Student. Developer. Problem Solver.</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student passionate about building
          thoughtful products and learning new technologies.
        </p>
        <div className="skills">
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">HTML/CSS</span>
          <span className="skill-tag">Python</span>
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
        <h2>Get In Touch</h2>
        <p>Let's connect and build something great together.</p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://github.com/yourusername">GitHub</a>
          <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Your Name</p>
      </footer>
    </div>
  );
}

export default App;