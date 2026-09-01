import Loader from '../components/Loader'
import Navigation from '../components/Navigation'
import '../styles/developer.css'

export default function Developer() {
  return (
    <>
      <Loader />
      <div className="noise"></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">Full Stack Developer</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Building</span>
              <span className="hero-title-line accent">Scalable</span>
              <span className="hero-title-line">Systems.</span>
            </h1>
            <p className="hero-desc">
              Web apps, AI-powered ATS resume screeners, job intelligence platforms &amp; performant full-stack APIs — crafted with precision.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects <span>↓</span></a>
              <a href="https://github.com/abhijeet-rx" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub <span>↗</span></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/abhijeet-rx" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/abhijeet-singh-3b6a39279/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:abhijeetrajput216@gmail.com" className="social-link" title="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="section-header">
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card" id="proj1" style={{ opacity: 1, transform: 'none' }}>
            <div className="project-img-wrap">
              <img src="/assets/images/project1.png" alt="Smart Resume Screener Preview" className="project-img" />
              <div className="project-img-overlay"></div>
            </div>
            <div className="project-card-inner">
              <div className="project-number">01</div>
              <div className="project-meta">
                <span className="project-tag">Full Stack</span>
                <span className="project-tag">React</span>
                <span className="project-tag">FastAPI</span>
                <span className="project-tag">Python</span>
                <span className="project-tag">PostgreSQL</span>
              </div>
              <h3 className="project-name">Smart Resume Screener &amp; ATS Analyzer</h3>
              <p className="project-desc">Automated candidate ATS resume scoring system with text extraction from PDFs, NLP skill matching against job descriptions, and interactive match dashboards.</p>
              <div className="project-actions">
                <a href="https://github.com/abhijeet-rx/smart-resume-screener" className="proj-btn" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
                <a href="https://smart-resume-screener-psi.vercel.app" className="proj-btn proj-btn-accent" target="_blank" rel="noopener noreferrer">Live Demo <span>↗</span></a>
              </div>
            </div>
            <div className="project-card-glow"></div>
          </div>

          {/* Project 2 */}
          <div className="project-card" id="proj2" style={{ opacity: 1, transform: 'none' }}>
            <div className="project-img-wrap">
              <img src="/assets/images/project2.png" alt="Dual Identity Portfolio Preview" className="project-img" />
              <div className="project-img-overlay"></div>
            </div>
            <div className="project-card-inner">
              <div className="project-number">02</div>
              <div className="project-status">
                <span className="status-dot"></span> Live
              </div>
              <div className="project-meta">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">GSAP</span>
                <span className="project-tag">Tailwind</span>
              </div>
              <h3 className="project-name">Dual Identity Portfolio</h3>
              <p className="project-desc">A premium, interactive dual-role portfolio (Software Engineer vs. Visual Creator) with 100vh split hero, seamless theme state management, and Lenis smooth scroll.</p>
              <div className="project-actions">
                <a href="https://github.com/abhijeet-rx/dual-portfolio" className="proj-btn" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
                <a href="http://localhost:3000" className="proj-btn proj-btn-accent" target="_blank" rel="noopener noreferrer">Live Demo <span>↗</span></a>
              </div>
            </div>
            <div className="project-card-glow"></div>
          </div>

          {/* Project 3 */}
          <div className="project-card" id="proj3" style={{ opacity: 1, transform: 'none' }}>
            <div className="project-img-wrap">
              <img src="/assets/images/dotfield-dashboard.png" alt="DOT Field Platform Dashboard Preview" className="project-img" />
              <div className="project-img-overlay"></div>
            </div>
            <div className="project-card-inner">
              <div className="project-number">03</div>
              <div className="project-status">
                <span className="status-dot"></span> Live
              </div>
              <div className="project-meta">
                <span className="project-tag">Spring Boot 3</span>
                <span className="project-tag">Java 21</span>
                <span className="project-tag">React 19</span>
                <span className="project-tag">PostgreSQL</span>
                <span className="project-tag">REST APIs</span>
              </div>
              <h3 className="project-name">DOT Field — Job Intelligence Platform</h3>
              <p className="project-desc">India-first multi-source job discovery &amp; requirement analysis engine with SHA-256 fingerprint deduplication, 4-dimension candidate fit scoring, and automated ATS resume tailoring.</p>
              <div className="project-actions">
                <a href="https://github.com/abhijeet-rx/Dot-field-" className="proj-btn" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
                <a href="https://github.com/abhijeet-rx/Dot-field-" className="proj-btn proj-btn-accent" target="_blank" rel="noopener noreferrer">View Repository <span>↗</span></a>
              </div>
            </div>
            <div className="project-card-glow"></div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-header">
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-group" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="skill-group-title">Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span class="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">GSAP</span>
            </div>
          </div>
          <div className="skill-group" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="skill-group-title">Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java / Spring Boot</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>
          <div className="skill-group" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="skill-group-title">Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          <a href="mailto:abhijeetrajput216@gmail.com" className="contact-card" style={{ opacity: 1, transform: 'none' }}>
            <div className="contact-icon">✉</div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">abhijeetrajput216@gmail.com</span>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/abhijeet-singh-3b6a39279/" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ opacity: 1, transform: 'none' }}>
            <div className="contact-icon">in</div>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">abhijeet-singh</span>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Abhijeet Singh. All Rights Reserved.</p>
        <a href="/" className="footer-back">← Back to Portfolio</a>
      </footer>
    </>
  )
}
