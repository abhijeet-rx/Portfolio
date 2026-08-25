import { useNavigate } from 'react-router-dom'
import TopBar from './TopBar'

export default function HeroSplit() {
  const navigate = useNavigate()

  const renderTitle = (text) => {
    return text.split('').map((char, i) => (
      <span key={i}>{char}</span>
    ))
  }

  return (
    <section className="hero-container">
      <TopBar />
      
      <div className="divider"></div>

      {/* Left Split — Developer */}
      <div className="split left">
        <div className="split-bg"></div>
        <div className="split-overlay"></div>
        <div className="split-content">
          <p className="split-eyebrow">Explore my</p>
          <h1 className="split-title">
            {renderTitle('Developer')}
          </h1>
          <p className="split-desc">Full-stack web apps, problem-solving systems, and creative frontend experiments.</p>
          <button className="btn btn-left" onClick={() => navigate('/developer')}>
            <span className="btn-text">Explore Developer Work</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
        <div className="corner-label corner-tl">01</div>
      </div>

      {/* Right Split — Designer */}
      <div className="split right">
        <div className="split-bg"></div>
        <div className="split-overlay"></div>
        <div className="split-content">
          <p className="split-eyebrow">Explore my</p>
          <h1 className="split-title">
            {renderTitle('Designer')}
          </h1>
          <p className="split-desc">UI/UX systems, visual storytelling, and brand-driven interface design.</p>
          <button className="btn btn-right" onClick={() => navigate('/designer')}>
            <span className="btn-text">Explore Designer Work</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
        <div className="corner-label corner-tr">02</div>
      </div>

      {/* Bottom name pill */}
      <div className="name-pill">
        <div className="pill-inner">
          <div className="pill-badge">Portfolio</div>
          <div className="pill-divider"></div>
          <div className="pill-name">
            <span className="pill-first">Abhijeet</span>
            <span className="pill-last">Singh</span>
          </div>
          <div className="pill-divider"></div>
          <div className="pill-tags">
            <span className="tag tag-dev">Dev</span>
            <span className="tag-sep">·</span>
            <span className="tag tag-des">Creator</span>
          </div>
        </div>
        <p className="pill-sub">B.Tech CSE at VIT Amaravati · Full-Stack Developer &amp; Video Editor</p>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  )
}
