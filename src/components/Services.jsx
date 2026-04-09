import { useRef, useEffect } from 'react'

const SERVICES = [
  {
    color: '#4f8ef7',
    title: 'Installation de systèmes d\'exploitation',
    desc: 'Installation et configuration complète de tout OS — toutes distributions Linux (Ubuntu, Debian, Arch, Fedora…) et toutes versions Windows. Partitionnement, dual-boot, drivers et mises à jour inclus.',
    features: ['Toutes distributions Linux', 'Windows 10 / 11 & serveurs', 'Dual-boot & virtualisation', 'Configuration post-installation'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    color: '#22c55e',
    title: 'Câblage réseau & infrastructure',
    desc: 'Conception, installation et sécurisation de votre infrastructure réseau filaire et sans fil. Tirage de câbles RJ45, pose de baies, switches, points d\'accès Wi-Fi et routeurs.',
    features: ['Câblage RJ45 Cat5e / Cat6 / Cat6a', 'Installation de baies de brassage', 'Configuration switches & routeurs', 'Wi-Fi professionnel (AP, mesh)'],
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    color: '#f59e0b',
    title: 'Administration systèmes & réseaux',
    desc: 'Gestion et maintenance de votre parc informatique. Mise en place de serveurs, Active Directory, DHCP/DNS, VPN, sauvegardes, monitoring et documentation technique.',
    features: ['Serveurs Linux & Windows Server', 'Active Directory / LDAP', 'VPN, firewall, sécurité réseau', 'Monitoring & maintenance'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    color: '#a855f7',
    title: 'Projets d\'infrastructure IT',
    desc: 'Accompagnement dans vos projets IT de A à Z : audit de l\'existant, conception de l\'architecture, déploiement, tests et formation des utilisateurs.',
    features: ['Audit & conseil technique', 'Conception d\'architecture réseau', 'Déploiement & migration', 'Formation & documentation'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 100)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={ref} className={`service-card fade-up${service.featured ? ' featured' : ''}`}>
      {service.featured && <div className="service-badge">Populaire</div>}
      <div className="service-icon" style={{ '--color': service.color }}>
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <ul className="service-features">
        {service.features.map(f => <li key={f}>{f}</li>)}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="tag">Ce que je fais</span>
          <h2>Mes services</h2>
          <p>Des interventions adaptées à vos besoins, pour particuliers comme professionnels.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
