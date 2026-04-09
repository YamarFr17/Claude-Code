const ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Sécurité & fiabilité',
    desc: "Chaque intervention est réalisée dans le respect des bonnes pratiques IT. Vos données et votre infrastructure sont entre des mains expertes et dignes de confiance.",
    color: '#4f8ef7',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Réactivité garantie',
    desc: "Réponse sous 24h assurée, intervention planifiée rapidement. Pour les urgences, une prise en charge prioritaire est disponible sur demande.",
    color: '#22c55e',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Tarification transparente',
    desc: "Devis gratuit et détaillé avant chaque intervention. Pas de mauvaise surprise : le prix convenu est le prix facturé, avec des options adaptées à chaque budget.",
    color: '#f59e0b',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Accompagnement personnalisé',
    desc: "Chaque client est unique. J'analyse votre environnement, vos contraintes et vos objectifs pour vous proposer la solution la plus adaptée — pas une solution générique.",
    color: '#a855f7',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Expertise technique avérée',
    desc: "Maîtrise de l'ensemble des environnements systèmes et réseaux — Windows, Linux, Cisco, virtualisation, Cloud — pour une intervention efficace quelle que soit la complexité.",
    color: '#06b6d4',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Suivi post-intervention',
    desc: "L'intervention ne s'arrête pas à la livraison. Un suivi est assuré pour garantir le bon fonctionnement dans la durée et répondre à vos questions après la mise en place.",
    color: '#22c55e',
  },
]

export default function Engagements() {
  return (
    <section className="engagements" id="engagements">
      <div className="container">
        <div className="section-header">
          <span className="tag">Pourquoi YitServices</span>
          <h2>Nos engagements envers vous</h2>
          <p>Des valeurs concrètes qui guident chaque intervention et chaque relation client.</p>
        </div>
        <div className="engagements-grid">
          {ITEMS.map(item => (
            <div key={item.title} className="engagement-card">
              <div className="engagement-icon" style={{ '--color': item.color }}>
                {item.icon}
              </div>
              <div className="engagement-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
