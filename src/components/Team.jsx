const MEMBERS = [
  {
    name: 'Joma Alfred',
    role: 'Technicien IT',
    skills: ['Installation OS', 'Administration réseau', 'Support technique'],
    color: '#4f8ef7',
    initials: 'JA',
  },
  {
    name: 'Yamar FARALAHY',
    role: 'Technicien IT',
    skills: ['Infogérance', 'Câblage & infrastructure', 'Sécurité réseau'],
    color: '#22c55e',
    initials: 'YF',
  },
  {
    name: 'Stéphano Kevin',
    role: 'Technicien IT',
    skills: ['Virtualisation', 'Systèmes & serveurs', 'Transformation digitale'],
    color: '#a855f7',
    initials: 'SK',
  },
]

function Avatar({ initials, color }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-avatar-svg">
      <defs>
        <linearGradient id={`grad-${initials}`} x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="48" fill={`url(#grad-${initials})`} />
      <circle cx="48" cy="48" r="48" fill="white" fillOpacity="0.06" />
      <text
        x="48" y="58"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="white"
      >
        {initials}
      </text>
    </svg>
  )
}

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-header">
          <span className="tag">Notre équipe</span>
          <h2>Les experts derrière itServices</h2>
          <p>Une équipe passionnée et expérimentée, prête à prendre en charge vos projets IT de bout en bout.</p>
        </div>

        <div className="team-grid">
          {MEMBERS.map(member => (
            <div key={member.name} className="team-card">
              <div className="team-avatar" style={{ '--color': member.color }}>
                <Avatar initials={member.initials} color={member.color} />
                <div className="team-avatar-ring" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role" style={{ color: member.color }}>{member.role}</span>
                <ul className="team-skills">
                  {member.skills.map(s => (
                    <li key={s} style={{ '--color': member.color }}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
