import { useEffect } from 'react'
import Loader from '../components/Loader'
import HeroSplit from '../components/HeroSplit'

export default function Home() {
  useEffect(() => {
    // Add loaded class to container after loader hides
    const timer = setTimeout(() => {
      const container = document.querySelector('.hero-container')
      if (container) {
        container.classList.add('loaded')
      }
    }, 2100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Hover logic for splits
    const container = document.querySelector('.hero-container')
    const contentLeft = document.querySelector('.split.left .split-content')
    const contentRight = document.querySelector('.split.right .split-content')

    const onEnterLeft = () => container?.classList.add('hover-left')
    const onLeaveLeft = () => container?.classList.remove('hover-left')
    const onEnterRight = () => container?.classList.add('hover-right')
    const onLeaveRight = () => container?.classList.remove('hover-right')

    if (container && contentLeft && contentRight) {
      contentLeft.addEventListener('mouseenter', onEnterLeft)
      contentLeft.addEventListener('mouseleave', onLeaveLeft)
      contentRight.addEventListener('mouseenter', onEnterRight)
      contentRight.addEventListener('mouseleave', onLeaveRight)
    }

    return () => {
      contentLeft?.removeEventListener('mouseenter', onEnterLeft)
      contentLeft?.removeEventListener('mouseleave', onLeaveLeft)
      contentRight?.removeEventListener('mouseenter', onEnterRight)
      contentRight?.removeEventListener('mouseleave', onLeaveRight)
    }
  }, [])

  return (
    <>
      <Loader />
      <HeroSplit />

      {/* About Me Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-frame">
            <img src="/assets/images/profile.png" alt="Abhijeet Singh" className="about-image" />
          </div>
          <div className="about-content">
            <p className="section-label">Discover</p>
            <h2>About Me</h2>
            <p className="about-main">
              Hi, I'm Abhijeet Singh. I build at the intersection of full-stack software engineering and visual creation. Based in Kota, Rajasthan, I am currently a B.Tech CSE student at Vellore Institute of Technology (VIT), Amaravati, specializing in full-stack web applications and video editing.
            </p>
            <p className="about-desc">
              My approach combines clean architecture, responsive interfaces, and attention to detail. From backend logic to polished frontend interactions, I aim to deliver work that is both technically reliable and visually memorable.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value">15+ Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2+ Years Learning</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10+ Tech Stack Tools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="education-container">
          <div className="section-header">
            <p className="section-label">The Journey</p>
            <h2>Education</h2>
            <p className="section-desc">Academic milestones that shaped my technical foundation</p>
          </div>

          <div className="roadmap">
            {/* BTech CSE */}
            <div className="roadmap-item">
              <div className="roadmap-timeline">
                <span className="year">2023 — 2027</span>
                <span className="status">In Progress</span>
              </div>
              <div className="roadmap-content">
                <span className="emoji">🎓</span>
                <div className="content-text">
                  <h3>B.Tech in Computer Science & Engineering</h3>
                  <p className="institution">Vellore Institute of Technology (VIT), Amaravati</p>
                  <p>Specializing in Computer Science & Engineering, full-stack software engineering, algorithms, AI/ML, and system architecture.</p>
                  <div className="tags">
                    <span className="tag">Computer Science</span>
                    <span className="tag">Full-Stack Dev</span>
                    <span className="tag">Algorithms</span>
                    <span className="tag">AI / ML</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 12th Grade */}
            <div className="roadmap-item">
              <div className="roadmap-timeline">
                <span className="year">2022</span>
                <span className="status">Completed (79.3%)</span>
              </div>
              <div className="roadmap-content">
                <span className="emoji">📐</span>
                <div className="content-text">
                  <h3>Senior Secondary (12th Grade)</h3>
                  <p className="institution">Kendriya Vidyalaya, Jhalawar</p>
                  <p>Completed Senior Secondary education with a focus on Mathematics, Science, and Computer Fundamentals, achieving 79.3%.</p>
                  <div className="tags">
                    <span className="tag">79.3% Score</span>
                    <span className="tag">Mathematics</span>
                    <span className="tag">Physics</span>
                    <span className="tag">CBSE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10th Grade */}
            <div className="roadmap-item">
              <div className="roadmap-timeline">
                <span className="year">2020</span>
                <span className="status">Completed (86.0%)</span>
              </div>
              <div className="roadmap-content">
                <span className="emoji">📝</span>
                <div className="content-text">
                  <h3>Secondary Education (10th Grade)</h3>
                  <p className="institution">Kendriya Vidyalaya, Jhalawar</p>
                  <p>Completed Secondary Schooling with distinction, achieving 86.0% across core academic subjects.</p>
                  <div className="tags">
                    <span className="tag">86.0% Score</span>
                    <span className="tag">Science & Math</span>
                    <span className="tag">CBSE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Experience Section */}
      <section className="experience-section">
        <div className="experience-container">
          <div className="section-header">
            <p className="section-label">Career Path</p>
            <h2>Working Experience</h2>
            <p className="section-desc">Professional and project experience across development and design</p>
          </div>

          <div className="experience-list">
            {/* Freelance */}
            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">2024 — Present</span>
                <span className="status">Current</span>
              </div>
              <div className="experience-content">
                <span className="emoji">💻</span>
                <div className="content-text">
                  <h3>Freelance Web Developer & Designer</h3>
                  <p className="workplace">Self-Employed</p>
                  <p>Building custom web applications and UI/UX designs for clients. Specializing in responsive, modern frontends with clean code architecture.</p>
                  <ul className="bullets">
                    <li>✦ Full-stack web application development</li>
                    <li>✦ UI/UX design & prototyping</li>
                    <li>✦ Client collaboration & project delivery</li>
                  </ul>
                  <div className="skills">
                    <span>HTML / CSS / JS</span>
                    <span>React</span>
                    <span>PHP</span>
                    <span>Figma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* University Projects */}
            <div className="experience-item">
              <div className="experience-timeline">
                <span className="year">2023 — Present</span>
                <span className="status">Ongoing</span>
              </div>
              <div className="experience-content">
                <span className="emoji">🎨</span>
                <div className="content-text">
                  <h3>University Projects & Open Source</h3>
                  <p className="workplace">Vellore Institute of Technology (VIT), Amaravati</p>
                  <p>Contributing to academic and open-source projects, building real-world applications as part of coursework and personal development.</p>
                  <ul className="bullets">
                    <li>✦ Recipe sharing platform (PHP + MySQL)</li>
                    <li>✦ Expense tracker application</li>
                    <li>✦ Personal portfolio website</li>
                  </ul>
                  <div className="skills">
                    <span>PHP / MySQL</span>
                    <span>JavaScript</span>
                    <span>Git / GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
