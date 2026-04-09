import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 99,  suffix: '%',  label: 'Taux de disponibilité',    desc: 'Garantie de service' },
  { value: 50,  suffix: '+',  label: 'Clients accompagnés',       desc: 'Particuliers & entreprises' },
  { value: 24,  suffix: 'h',  label: 'Délai de réponse',          desc: 'Garanti sur devis' },
  { value: 10,  suffix: '+',  label: "Années d'expérience",        desc: 'Systèmes & réseaux' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, duration / steps)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="stat-counter">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="stats-card">
              <Counter target={s.value} suffix={s.suffix} />
              <strong>{s.label}</strong>
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
