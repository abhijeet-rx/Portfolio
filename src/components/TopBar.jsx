export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="top-left">
        <div className="top-mono">AS</div>
      </div>
      
      <div className="top-center-label">Portfolio · 2026 · Kota, Rajasthan</div>
      
      <div className="top-right">
        <a href="/Abhijeet_Singh_Resume.pdf" download="Abhijeet_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="top-resume-btn" title="Download Resume">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Resume</span>
        </a>
        <div className="top-hint">
          <span>Hover or tap to explore</span>
          <div className="hint-line"></div>
        </div>
      </div>
    </header>
  )
}
