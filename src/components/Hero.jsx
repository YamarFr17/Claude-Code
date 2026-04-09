export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      {/* Floating tech cards */}
      <div className="hero-float hero-float--left">
        <span className="float-dot" />
        <span>Supervision active</span>
      </div>
      <div className="hero-float hero-float--right">
        <span className="float-dot float-dot--green" />
        <span>Infrastructure opérationnelle</span>
      </div>

      <div className="container hero-content">
        <span className="badge">Disponible 7j/7 — Devis gratuit sous 24h</span>

        <h1>
          Votre infrastructure IT,<br />
          <span className="gradient-text">entre de bonnes mains</span>
        </h1>

        <p className="hero-sub">
          YitServices accompagne particuliers et entreprises dans tous leurs projets informatiques —
          installation OS, câblage réseau, infogérance et transformation digitale.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Demander un devis gratuit</a>
          <a href="#services" className="btn btn-outline">Voir les services</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">Windows &amp; Linux</span>
            <span className="stat-label">Toutes distributions</span>
          </div>
          <div className="divider" />
          <div className="stat">
            <span className="stat-num">Réseau &amp; Infra</span>
            <span className="stat-label">Câblage · Switches · Wi-Fi</span>
          </div>
          <div className="divider" />
          <div className="stat">
            <span className="stat-num">Infogérance</span>
            <span className="stat-label">Supervision temps réel</span>
          </div>
          <div className="divider" />
          <div className="stat">
            <span className="stat-num">Cloud &amp; Sécu</span>
            <span className="stat-label">Transformation digitale</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint"><span /></div>
    </section>
  )
}
