const STEPS = [
  {
    num: '01',
    title: 'Contact & diagnostic',
    desc: 'Vous me décrivez votre besoin. J\'analyse la situation et je vous propose une solution adaptée.',
  },
  {
    num: '02',
    title: 'Devis & planification',
    desc: 'Un devis clair et transparent. On fixe ensemble la date et les modalités de l\'intervention.',
  },
  {
    num: '03',
    title: 'Intervention',
    desc: 'Je réalise le travail avec soin, en vous tenant informé à chaque étape importante.',
  },
  {
    num: '04',
    title: 'Validation & suivi',
    desc: 'On vérifie ensemble le bon fonctionnement. Un suivi post-intervention est assuré.',
  },
]

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-header">
          <span className="tag">Comment ça marche</span>
          <h2>Déroulement d'une intervention</h2>
        </div>
        <div className="steps">
          {STEPS.map((step, i) => (
            <>
              <div key={step.num} className="step">
                <div className="step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div key={`arrow-${i}`} className="step-arrow">→</div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
