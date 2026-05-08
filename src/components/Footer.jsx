import JYSLogo from './JYSLogo'

const LINKS = [
  { label: 'Services',     href: '#services' },
  { label: 'Engagements',  href: '#engagements' },
  { label: 'À propos',     href: '#about' },
  { label: 'Équipe',       href: '#team' },
  { label: 'Contact',      href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#hero" className="logo">
            <JYSLogo size={36} />
            <span className="logo-wordmark">it<strong>Services</strong></span>
          </a>
          <p className="footer-tagline">Sécurisez, optimisez &amp; faites évoluer votre IT.</p>
        </div>

        <nav className="footer-nav">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} itServices — Tous droits réservés</p>
          <p className="footer-copy">Devis gratuit · Réponse sous 24h · Sur site &amp; à distance</p>
        </div>
      </div>
    </footer>
  )
}
