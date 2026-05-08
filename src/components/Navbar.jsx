import { useState, useEffect } from 'react'
import JYSLogo from './JYSLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <JYSLogo size={38} />
          <span className="logo-wordmark">Yit<strong>Services</strong></span>
        </a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#engagements" onClick={closeMenu}>Engagements</a></li>
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#contact" className="btn-nav" onClick={closeMenu}>Contact</a></li>
        </ul>

        <button
          className={`burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
