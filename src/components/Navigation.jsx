import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <button 
        onClick={() => navigate('/')}
        className="nav-back"
      >
        <span className="nav-back-arrow">←</span>
        <span>Back</span>
      </button>
      <div className="nav-mono">VB</div>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
