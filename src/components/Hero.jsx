export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <span className="badge">Disponible pour toute intervention</span>

        <h1>
          Votre expert en{' '}
          <span className="gradient-text">systèmes</span>{' '}
          &amp;{' '}
          <span className="gradient-text">réseaux</span>
        </h1>

        <p className="hero-sub">
          Installations OS, câblage réseau, infrastructure IT et administration systèmes —<br />
          des solutions professionnelles accessibles à tous.
        </p>

        <div className="hero-cta">
          <a href="#services" className="btn btn-primary">Découvrir les services</a>
          <a href="#contact" className="btn btn-outline">Demander un devis</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">Windows</span>
            <span className="stat-label">&amp; Linux</span>
          </div>
          <div className="divider" />
          <div className="stat">
            <span className="stat-num">Réseau</span>
            <span className="stat-label">Câblage &amp; Infra</span>
          </div>
          <div className="divider" />
          <div className="stat">
            <span className="stat-num">Admin</span>
            <span className="stat-label">Sys &amp; Réseau</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint"><span /></div>
    </section>
  )
}
