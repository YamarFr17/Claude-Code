import { useRef, useEffect } from 'react'

const SERVICES = [
  {
    color: '#4f8ef7',
    title: 'Infogérance & supervision',
    desc: "Gestion complète de votre parc informatique avec supervision en temps réel. Audit initial, contrats d'infogérance globale ou partielle, maintenance préventive et curative, astreinte et support utilisateurs.",
    features: ['Audit & inventaire du parc IT', 'Supervision réseau & serveurs 24/7', 'Maintenance préventive & curative', 'Support utilisateurs & helpdesk'],
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    color: '#22c55e',
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
    color: '#f59e0b',
    title: 'Câblage réseau & infrastructure',
    desc: 'Conception, installation et sécurisation de votre infrastructure réseau filaire et sans fil. Tirage de câbles RJ45, pose de baies de brassage, switches, points d\'accès Wi-Fi et routeurs.',
    features: ['Câblage RJ45 Cat5e / Cat6 / Cat6a', 'Installation de baies de brassage', 'Configuration switches & routeurs', 'Wi-Fi professionnel (AP, mesh)'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    color: '#ef4444',
    title: 'Sécurité réseau & firewall',
    desc: 'Audit et sécurisation de votre infrastructure. Mise en place de firewalls, VPN, politiques de sécurité, détection d\'intrusion et conformité RGPD pour protéger vos données.',
    features: ['Firewall & règles de sécurité', 'VPN site-à-site & accès distants', 'Audit de vulnérabilités', 'Politique de sauvegarde & PRA'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    color: '#a855f7',
    title: 'Administration systèmes & réseaux',
    desc: 'Gestion et maintenance de votre parc informatique. Mise en place de serveurs, Active Directory, DHCP/DNS, sauvegardes automatisées et documentation technique complète.',
    features: ['Serveurs Linux & Windows Server', 'Active Directory / LDAP / DNS', 'Sauvegardes automatisées', 'Monitoring & alertes'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    color: '#06b6d4',
    title: 'Projets IT & transformation digitale',
    desc: "Accompagnement de A à Z dans vos projets de transformation digitale : migration Cloud, mobilité, analytics et sécurité. De l'audit stratégique au déploiement, pour les PME et grands comptes.",
    features: ['Audit & conseil stratégique IT', 'Migration Cloud & hybride', 'Mobilité & solutions collaboratives', 'Formation & conduite du changement'],
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
          setTimeout(() => el.classList.add('visible'), index * 80)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={ref} className={`service-card fade-up${service.featured ? ' featured' : ''}`}>
      {service.featured && <div className="service-badge">Phare</div>}
      <div className="service-icon" style={{ '--color': service.color }}>
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <ul className="service-features">
        {service.features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <a href="#contact" className="service-cta">Demander un devis →</a>
    </div>
  )
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="tag">Nos expertises</span>
          <h2>Des solutions IT complètes</h2>
          <p>De l'infogérance à la transformation digitale, des interventions sur mesure pour sécuriser et optimiser votre infrastructure.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
