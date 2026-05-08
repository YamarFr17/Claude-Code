const TECHS = [
  'Linux', 'Windows Server', 'TCP/IP', 'Cisco',
  'VPN', 'Active Directory', 'RJ45 / Fibre', 'Virtualisation',
  'Cloud', 'Firewall', 'Wi-Fi', 'DHCP / DNS',
]

const HIGHLIGHTS = [
  { icon: '🖥️', text: 'Interventions sur site & à distance' },
  { icon: '🏢', text: 'Particuliers, PME & grands comptes' },
  { icon: '📄', text: 'Devis gratuit & tarifs transparents' },
  { icon: '🔁', text: 'Suivi post-intervention inclus' },
  { icon: '⚡', text: 'Réactivité 24h garantie' },
  { icon: '🔒', text: 'Confidentialité & sécurité des données' },
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
              <strong>Technicien IT — itServices</strong>
              <span>Systèmes &amp; Réseaux</span>
            </div>
          </div>

          <div className="about-xp-bar">
            <div className="xp-item">
              <span className="xp-label">Systèmes (Windows / Linux)</span>
              <div className="xp-track"><div className="xp-fill" style={{ '--w': '95%', '--color': '#4f8ef7' }} /></div>
            </div>
            <div className="xp-item">
              <span className="xp-label">Réseaux &amp; Infrastructure</span>
              <div className="xp-track"><div className="xp-fill" style={{ '--w': '90%', '--color': '#22c55e' }} /></div>
            </div>
            <div className="xp-item">
              <span className="xp-label">Sécurité &amp; Firewall</span>
              <div className="xp-track"><div className="xp-fill" style={{ '--w': '85%', '--color': '#f59e0b' }} /></div>
            </div>
            <div className="xp-item">
              <span className="xp-label">Cloud &amp; Virtualisation</span>
              <div className="xp-track"><div className="xp-fill" style={{ '--w': '80%', '--color': '#a855f7' }} /></div>
            </div>
          </div>

          <div className="about-tech-pills">
            {TECHS.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>

        <div className="about-text">
          <span className="tag">À propos de itServices</span>
          <h2>Une expertise IT au service de votre réussite</h2>
          <p>
            itServices est né de la conviction que chaque structure — petite ou grande — mérite
            un accès à des services informatiques de qualité professionnelle, sans complexité
            et à prix juste.
          </p>
          <p>
            Technicien spécialisé en systèmes et réseaux, j'interviens sur tout type
            d'environnement : poste de travail, serveur d'entreprise, infrastructure réseau
            complète ou simple câblage. Chaque mission est traitée avec le même niveau
            d'exigence, quelle que soit sa taille.
          </p>
          <div className="about-highlights">
            {HIGHLIGHTS.map(h => (
              <div key={h.text} className="highlight-item">
                <span className="hl-emoji">{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
