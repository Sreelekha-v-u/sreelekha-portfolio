
import { useState } from 'react';
import './App.css';

const WHATSAPP_NUMBER = '919633631819'; 
const EMAIL = 'sreelekhavu1998@gmail.com';
const GITHUB_URL = 'https://github.com/Sreelekha-v-u'; // Add your GitHub profile URL
const LINKEDIN_URL = ''; // Add your LinkedIn profile URL

const skillGroups = [
  {
    title: 'Operating Systems',
    icon: '🐧',
    skills: ['Linux', 'Ubuntu', 'File Permissions', 'Process Management' , 'Service Management']
  },
  {
    title: 'Version Control',
    icon: '🔗',
    skills: ['Git', 'GitHub', 'Branching', 'Version Control']
  },
  {
    title: 'Networking',
    icon: '🌐',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'SSH', 'SSL/TLS']
  },
  {
    title: 'Automation & Scripting',
    icon: '⚙️',
    skills: ['Shell Scripting', 'Bash', 'Linux Commands']
  },
  {
    title: 'Web Technologies',
    icon: '💻',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'DevOps Learning',
    icon: '☁️',
    skills: ['CI/CD Fundamentals', 'Cloud Fundamentals', 'Deployment']
  }
];

const projects = [
  {
    number: '01',
    title: 'Personal Portfolio',
    description:
      'A responsive personal portfolio built to showcase my technical skills, projects and professional journey.',
    tech: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/Sreelekha-v-u/sreelekha-portfolio',
    demo: ''
  },
  {
    number: '02',
    title: 'Responsive Landing Page',
    description:
      'A modern landing page with responsive layouts and reusable UI components.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '',
    demo: ''
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setFormStatus('Your email application is being opened. Please send the prepared message.');

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Sreelekha! I visited your portfolio and would like to connect.'
  )}`;

  return (
    <div className="portfolio">

      {/* Navbar */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>SREELEKHA V U</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul id="nav-links" className={menuOpen ? 'nav-links active' : 'nav-links'}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
       
     
{/* HERO SECTION */}
<section id="home" className="hero">

  <div className="hero-content">

    <div className="hero-status">
      <span className="status-dot"></span>
      OPEN TO OPPORTUNITIES
    </div>

    <p className="hero-greeting">HELLO, I'M</p>

    <h2>
      <span>SREELEKHA V U</span>
    </h2>

    <h3>
      Aspiring <span>DevOps Engineer</span>
    </h3>

    <p className="hero-description">
      An IT professional with 4+ years of industry experience, 
      currently advancing my expertise in DevOps engineering. 
      Focused on building practical skills in Linux, Cloud Infrastructure, 
      CI/CD pipelines, automation, and containerization, with a strong 
      interest in designing reliable, scalable, and efficient IT solutions.
      Passionate about building reliable infrastructure,
      automating workflows and exploring cloud technologies.
      I am continuously developing my skills in DevOps,
      Linux, AWS and modern deployment practices.
    </p>

    <div className="hero-tech-stack">
      <span>Linux</span>
      <span>AWS</span>
      <span>Docker</span>
      <span>Git</span>
      <span>Networking</span>
    </div>

    <div className="hero-buttons">
      <a href="#projects" className="hero-btn primary-btn">
        Explore My Projects <span>↗</span>
      </a>

      <a href="#contact" className="hero-btn secondary-btn">
        Let's Connect <span>↗</span>
      </a>
    </div>

    <div className="hero-footer">
      <span>BASED IN INDIA</span>
      <span className="footer-line"></span>
      <span>CONTINUOUSLY LEARNING & BUILDING</span>
    </div>

  </div>

  {/* RIGHT SIDE VISUAL */}

  <div className="hero-visual">

    <div className="visual-glow"></div>

    <div className="devops-card">

      <div className="card-header">
        <div className="window-dots">
          <i></i><i></i><i></i>
        </div>
        <span>DEVOPS / OVERVIEW</span>
      </div>

      <div className="cloud-symbol">☁</div>

      <h3>BUILD. AUTOMATE. DEPLOY.</h3>

      <p>Exploring the DevOps Ecosystem</p>

      <div className="pipeline">

        <div className="pipeline-item">
          <span className="pipeline-icon">⌘</span>
          <div>
            <strong>CODE</strong>
            <small>Git & GitHub</small>
          </div>
        </div>

        <div className="pipeline-arrow">↓</div>

        <div className="pipeline-item">
          <span className="pipeline-icon">⚙</span>
          <div>
            <strong>BUILD & AUTOMATE</strong>
            <small>Linux & Docker</small>
          </div>
        </div>

        <div className="pipeline-arrow">↓</div>

        <div className="pipeline-item">
          <span className="pipeline-icon">☁</span>
          <div>
            <strong>DEPLOY</strong>
            <small>AWS & Cloud</small>
          </div>
        </div>

      </div>

      <div className="card-bottom">
        <span className="status-dot"></span>
        LEARNING • BUILDING • IMPROVING
      </div>

    </div>

    

  </div>

</section>
   
       
{/* Always Learning */}
<section className="learning-section" id="learning">

  <div className="learning-content">
    <span className="section-tag">MY LEARNING JOURNEY</span>

    <h2>
      Always <span>Learning.</span>
    </h2>

    <p>
      Exploring new technologies, building cloud infrastructure,
      automating workflows and growing every day as a DevOps Engineer.
    </p>
  </div>

  <div className="orbit-container">

    <div className="orbit orbit-one"></div>
    <div className="orbit orbit-two"></div>

    <div className="orbit-center">
      <span>ALWAYS</span>
      <strong>LEARNING</strong>
      <small>DEVOPS ENGINEER</small>
    </div>

    <div className="orbit-items">

      <div className="tech-icon icon-aws">
        <img src="https://cdn.simpleicons.org/amazonaws/FF9900" alt="AWS" />
        <span>AWS</span>
      </div>

      <div className="tech-icon icon-docker">
        <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" />
        <span>Docker</span>
      </div>

      <div className="tech-icon icon-kubernetes">
        <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" />
        <span>Kubernetes</span>
      </div>

      <div className="tech-icon icon-linux">
        <img src="https://cdn.simpleicons.org/linux/FCC624" alt="Linux" />
        <span>Linux</span>
      </div>

      <div className="tech-icon icon-github">
        <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" />
        <span>GitHub</span>
      </div>

      <div className="tech-icon icon-jenkins">
        <img src="https://cdn.simpleicons.org/jenkins/D24939" alt="Jenkins" />
        <span>Jenkins</span>
      </div>

      <div className="tech-icon icon-terraform">
        <img src="https://cdn.simpleicons.org/terraform/844FBA" alt="Terraform" />
        <span>Terraform</span>
      </div>

      <div className="tech-icon icon-python">
        <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" />
        <span>Python</span>
      </div>

    </div>
  </div>
</section>
        {/* About */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <span className="section-label">GET TO KNOW ME</span>
            <h2>About <span>Me</span></h2>
            <p>A little introduction about my professional journey.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <span className="card-number">01 / INTRODUCTION</span>
              <h3>Driven by curiosity. Focused on growth.</h3>
              <p>
                I am Sreelekha V U, an IT professional transitioning towards
                DevOps Engineering. I am developing my technical knowledge
                through continuous learning and hands-on practice.
              </p>
              <p>
                My interests include Linux administration, networking,
                version control, automation, cloud technologies and CI/CD.
                I enjoy understanding how systems work and finding ways
                to improve them.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <span>🎓</span>
                <div>
                  <h3>Education</h3>
                  <p>B.Tech in Electronics and Communications</p>
                </div>
              </div>

              <div className="detail-card">
                <span>🎯</span>
                <div>
                  <h3>Career Objective</h3>
                  <p>
                    To grow as a DevOps Engineer and contribute to
                    automation, infrastructure and deployment workflows.
                  </p>
                </div>
              </div>

              <div className="detail-card">
                <span>📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Kerala, India</p>
                </div>
              </div>

              <a
                href="/resume.pdf"
                className="btn btn-primary resume-btn" className="hero-btn primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume ↓
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <span className="section-label">WHAT I WORK WITH</span>
            <h2>Technical <span>Skills</span></h2>
            <p>Technologies and tools I am learning and practising.</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-title">
                  <span>{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        

        {/* Projects */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="section-label">MY RECENT WORK</span>
            <h2>Featured <span>Projects</span></h2>
            <p>Practical work that reflects my learning and development.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-icon">↗</span>
                </div>

                <div className="project-preview">
                  <span>PROJECT / {project.number}</span>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span className="section-label">LET'S CONNECT</span>
            <h2>Have a project in <span>mind?</span></h2>
            <p>
              I would love to connect, discuss opportunities and learn
              about interesting projects.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <a className="contact-card" href={whatsappLink}
                target="_blank" rel="noreferrer">
                <span>💬</span>
                <div>
                  <small>WHATSAPP</small>
                  <h3>Let's Chat</h3>
                </div>
                <span className="contact-arrow">↗</span>
              </a>

              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <span>✉️</span>
                <div>
                  <small>EMAIL</small>
                  <h3>{EMAIL}</h3>
                </div>
                <span className="contact-arrow">↗</span>
              </a>

              {GITHUB_URL && (
                <a className="contact-card" href={GITHUB_URL}
                  target="_blank" rel="noreferrer">
                  <span>💻</span>
                  <div>
                    <small>GITHUB</small>
                    <h3>View My Repositories</h3>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>
              )}

              {LINKEDIN_URL && (
                <a className="contact-card" href={LINKEDIN_URL}
                  target="_blank" rel="noreferrer">
                  <span>🔗</span>
                  <div>
                    <small>LINKEDIN</small>
                    <h3>Connect With Me</h3>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>
              )}
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>

              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>

              <button type="submit" className="btn btn-primary">
                Prepare Email ↗
              </button>

              {formStatus && (
                <p className="form-status" role="status">{formStatus}</p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo"><span>SREELEKHA V U</span></a>
        <p>Building skills. Creating possibilities.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Sreelekha V U. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
