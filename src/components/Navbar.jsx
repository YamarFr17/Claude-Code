import { useState, useEffect } from 'react'
import JYSLogo from './JYSLogo'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { label: 'Services',    href: 'services' },
  { label: 'Engagements', href: 'engagements' },
  { label: 'À propos',    href: 'about' },
  { label: 'Équipe',      href: 'team' },
]

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [open,          setOpen]          = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [theme,         setTheme]         = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  /* ---- Apply theme to <html> ---- */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  /* ---- Scroll: sticky style ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ---- IntersectionObserver: highlight active section ---- */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    setActiveSection(id)
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          <JYSLogo size={38} />
          <span className="logo-wordmark">it<strong>Services</strong></span>
        </a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={`#${href}`}
                className={activeSection === href ? 'active' : ''}
                onClick={() => handleClick(href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />
          <button
            className={`burger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
