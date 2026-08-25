import { useEffect, useState } from 'react'

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-logo">
        <span className="loader-initials">VB</span>
        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>
        <span className="loader-text">Loading Portfolio</span>
      </div>
    </div>
  )
}
