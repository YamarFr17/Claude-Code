const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Engagements', href: '#engagements' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#hero" className="logo">
            <span className="logo-icon">⚡</span>
            <span><span className="logo-y">Y</span>it<strong>Services</strong></span>
          </a>
          <p className="footer-tagline">Sécurisez, optimisez &amp; faites évoluer votre IT.</p>
        </div>

        <nav className="footer-nav">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} YitServices — Tous droits réservés</p>
          <p className="footer-copy">Devis gratuit · Réponse sous 24h · Sur site &amp; à distance</p>
        </div>
      </div>
    </footer>
  )
}
