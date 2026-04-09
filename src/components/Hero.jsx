export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <span className="badge">Infogérance &amp; interventions IT — Disponible 7j/7</span>

        <h1>
          Sécurisez, optimisez &amp;<br />
          <span className="gradient-text">faites évoluer</span> votre IT
        </h1>

        <p className="hero-sub">
          Expert en systèmes et réseaux, j'accompagne les particuliers et les entreprises
          dans leurs projets informatiques — installation OS, câblage, infogérance
          et transformation digitale.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Demander un devis gratuit</a>
          <a href="#services" className="btn btn-outline">Découvrir les services</a>
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
            <span className="stat-num">SMACS</span>
            <span className="stat-label">Transformation digitale</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint"><span /></div>
    </section>
  )
}
