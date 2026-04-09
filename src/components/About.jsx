const TECHS = ['Linux', 'Windows', 'TCP/IP', 'Cisco', 'VPN', 'Active Directory', 'RJ45 / Fibre', 'Virtualisation']

const HIGHLIGHTS = [
  'Interventions sur site ou à distance',
  'Disponible pour particuliers & professionnels',
  'Tarifs transparents, devis gratuit',
  'Support post-intervention inclus',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-visual">
          <div className="about-card-main">
            <div className="about-avatar">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="#1e293b"/>
                <circle cx="40" cy="30" r="14" fill="#4f8ef7" opacity="0.9"/>
                <ellipse cx="40" cy="68" rx="22" ry="14" fill="#4f8ef7" opacity="0.7"/>
              </svg>
            </div>
            <div className="about-card-text">
              <strong>Technicien IT</strong>
              <span>Systèmes &amp; Réseaux</span>
            </div>
          </div>
          <div className="about-tech-pills">
            {TECHS.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>

        <div className="about-text">
          <span className="tag">À propos</span>
          <h2>Passionné par l'IT, à votre service</h2>
          <p>
            Technicien spécialisé en systèmes et réseaux, j'interviens aussi bien chez les
            particuliers que dans les entreprises pour tout ce qui touche à l'informatique
            et aux infrastructures réseau.
          </p>
          <p>
            Que vous ayez besoin d'installer un système d'exploitation, de mettre en place
            un réseau d'entreprise ou de gérer votre parc informatique, je m'adapte à votre
            environnement et à vos contraintes pour vous fournir une solution fiable et pérenne.
          </p>
          <div className="about-highlights">
            {HIGHLIGHTS.map(h => (
              <div key={h} className="highlight-item">
                <span className="hl-icon">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
