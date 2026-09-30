import { useState, useRef } from 'react'
import Loader from '../components/Loader'
import Navigation from '../components/Navigation'
import '../styles/designer.css'

export default function Designer() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }

  const handlePlayTrigger = (e) => {
    e.preventDefault()
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      togglePlay()
    }
  }

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
            <p className="hero-eyebrow">Video Editor &amp; Motion Designer</p>
            <h1 className="hero-title">
              <span className="hero-title-line">Crafting</span>
              <span className="hero-title-line accent">Cinematic</span>
              <span className="hero-title-line">Visuals.</span>
            </h1>
            <p className="hero-desc">
              Motion graphics, After Effects kinetic typography, Premiere Pro cuts, and CapCut visual effects.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Showreels <span>↓</span></a>
              <a href="/Abhijeet_Singh_Resume.pdf" download="Abhijeet_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Resume</span>
              </a>
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
          <h2 className="section-title">Visual Edits &amp; Motion Design</h2>
        </div>
        <div className="projects-grid">

          {/* Project 1 — Adonis Promotional Video (Featured) */}
          <div className="project-card project-card-featured" id="proj1" style={{ opacity: 1, transform: 'none' }}>
            <div className="project-video-wrap">
              <video
                ref={videoRef}
                id="adonisVideo"
                className="project-video"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/Adonis.mp4" type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>

              <div className="video-badge">
                <span className="badge-dot"></span>
                <span>Featured Promo</span>
              </div>

              <div
                className={`video-play-overlay ${isPlaying ? 'is-playing' : ''}`}
                onClick={togglePlay}
                title="Click to play promotional video"
              >
                <div className="video-play-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="video-play-hint">Watch Promotional Video</span>
              </div>
            </div>

            <div className="project-card-inner">
              <div className="project-card-top-row">
                <div className="project-number">01</div>
                <div className="project-status">
                  <span className="status-dot"></span> Official Promo
                </div>
              </div>
              <div className="project-meta">
                <span className="project-tag">Motion Graphics</span>
                <span className="project-tag">Product Promo</span>
                <span className="project-tag">Kinetic Typography</span>
                <span className="project-tag">After Effects</span>
                <span className="project-tag">Sound Design</span>
              </div>
              <h3 className="project-name">ADONIS — Product Launch &amp; Promotional Showcase</h3>
              <p className="project-desc">
                High-octane product launch and motion graphics showcase created for <strong>Adonis</strong> — a distributed workflow automation platform. Features dynamic kinetic typography, sleek dark UI visualizations, rhythmic beat-matched transitions, and ambient sound design to dramatize real-time execution pipelines, cron schedules, and webhook trigger architectures.
              </p>
              <div className="project-actions">
                <button className="proj-btn proj-btn-accent" onClick={handlePlayTrigger} type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>{isPlaying ? 'Pause Promo' : 'Watch Promo'}</span>
                </button>
                <a href="https://github.com/abhijeet-rx/Adonis" className="proj-btn" target="_blank" rel="noopener noreferrer">
                  <span>Adonis Engine</span> <span>↗</span>
                </a>
                <a href="/videos/Adonis.mp4" target="_blank" download="Adonis_Promotional_Video.mp4" className="proj-btn" title="Download High-Res MP4">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download MP4</span>
                </a>
              </div>
            </div>
            <div className="project-card-glow"></div>
          </div>

          {/* Project 2 */}
          <div className="project-card" id="proj2" style={{ opacity: 1, transform: 'none' }}>
            <div className="project-card-inner">
              <div className="project-number">02</div>
              <div className="project-meta">
                <span className="project-tag">After Effects</span>
                <span className="project-tag">Motion Design</span>
                <span className="project-tag">Typography</span>
              </div>
              <h3 className="project-name">NEON VELOCITY — After Effects Reel</h3>
              <p className="project-desc">High-octane motion graphics reel featuring fast keyframed typography, glowing neon line accents, and rhythmic bass-hit sound design.</p>
            </div>
            <div className="project-card-glow"></div>
          </div>

          {/* Project 3 */}
          <div className="project-card" id="proj3" style={{ opacity: 1, transform: 'none' }}>
            <div className="project-card-inner">
              <div className="project-number">03</div>
              <div className="project-meta">
                <span className="project-tag">Premiere Pro</span>
                <span className="project-tag">CapCut FX</span>
                <span className="project-tag">Color Grade</span>
              </div>
              <h3 className="project-name">CHRONICLES — Cinematic Short Edit</h3>
              <p className="project-desc">Cinematic short edit with 2.39:1 anamorphic crop, custom LUT color grading, speed ramping, and ambient audio layering.</p>
            </div>
            <div className="project-card-glow"></div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-header">
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-title">Skills &amp; Software</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-group" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="skill-group-title">Editing Software</h3>
            <div className="skill-tags">
              <span className="skill-tag">Adobe After Effects</span>
              <span className="skill-tag">Adobe Premiere Pro</span>
              <span className="skill-tag">CapCut Pro</span>
              <span className="skill-tag">Adobe Photoshop</span>
            </div>
          </div>
          <div className="skill-group" style={{ opacity: 1, transform: 'none' }}>
            <h3 className="skill-group-title">Visual Craft</h3>
            <div className="skill-tags">
              <span className="skill-tag">Motion Graphics</span>
              <span className="skill-tag">Kinetic Typography</span>
              <span className="skill-tag">Color Grading</span>
              <span className="skill-tag">Speed Ramping</span>
              <span className="skill-tag">Sound Design</span>
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
          <a href="/Abhijeet_Singh_Resume.pdf" download="Abhijeet_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-card resume-card" style={{ opacity: 1, transform: 'none' }}>
            <div className="contact-icon resume-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="12" y2="18"></line>
                <line x1="15" y1="15" x2="12" y2="18"></line>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">Resume / CV</span>
              <span className="contact-value">Abhijeet Singh Resume (PDF)</span>
            </div>
            <span className="contact-arrow">↓</span>
          </a>
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
