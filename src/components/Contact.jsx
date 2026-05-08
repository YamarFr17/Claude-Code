import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'gmaildiyamar'
const TEMPLATE_ID = 'template_i12kyrl'
const PUBLIC_KEY  = 'Gt2-B7aZlUgJnk1Bd'

const INFO_ITEMS = [
  {
    label: 'Email',
    value: 'faralahyyamarodin@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Téléphone',
    value: 'Disponible sur demande',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Disponibilité',
    value: '7j/7 — Réponse sous 24h',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: "Zone d'intervention",
    value: 'Sur site & à distance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [fields, setFields] = useState({
    from_name: '', from_email: '', phone: '', service: '', message: '',
  })
  const [errors, setErrors]       = useState({})
  const [loading, setLoading]     = useState(false)
  const [sent, setSent]           = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!fields.from_name.trim())  e.from_name = true
    if (!fields.from_email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email)) e.from_email = true
    if (!fields.message.trim())    e.message = true
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: false }))
    if (serverError) setServerError('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setServerError('Configuration EmailJS manquante. Veuillez configurer les variables d\'environnement.')
      return
    }

    setLoading(true)
    setServerError('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setSent(true)
    } catch (err) {
      setServerError('Erreur d\'envoi. Contactez-moi directement à faralahyyamarodin@gmail.com')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSent(false)
    setFields({ from_name: '', from_email: '', phone: '', service: '', message: '' })
    setErrors({})
    setServerError('')
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="tag">Me contacter</span>
          <h2>Parlons de votre projet</h2>
          <p>Décrivez votre besoin — je vous réponds sous 24h avec une proposition adaptée et un devis gratuit.</p>
        </div>

        <div className="contact-wrapper">
          {sent ? (
            <div className="contact-form form-sent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="52">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>Message envoyé !</h3>
              <p>Je vous répondrai dans les 24h. Merci de votre confiance.</p>
              <button className="btn btn-outline" onClick={reset}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Hidden field — destinataire pour le template EmailJS */}
              <input type="hidden" name="to_email" value="diyamar@gmail.com" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="from_name">Nom / Entreprise *</label>
                  <input
                    id="from_name" name="from_name" type="text"
                    placeholder="Jean Dupont"
                    value={fields.from_name} onChange={handleChange}
                    className={errors.from_name ? 'invalid' : ''}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="from_email">Email *</label>
                  <input
                    id="from_email" name="from_email" type="email"
                    placeholder="jean@exemple.com"
                    value={fields.from_email} onChange={handleChange}
                    className={errors.from_email ? 'invalid' : ''}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+33 6 00 00 00 00"
                    value={fields.phone} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service souhaité</label>
                  <select id="service" name="service" value={fields.service} onChange={handleChange}>
                    <option value="">— Sélectionnez —</option>
                    <option value="Infogérance & supervision">Infogérance &amp; supervision</option>
                    <option value="Installation OS">Installation OS (Windows / Linux)</option>
                    <option value="Câblage réseau & infrastructure">Câblage réseau &amp; infrastructure</option>
                    <option value="Administration systèmes & réseaux">Administration systèmes &amp; réseaux</option>
                    <option value="Sécurité réseau & audit">Sécurité réseau &amp; audit</option>
                    <option value="Projets IT & transformation digitale">Projets IT &amp; transformation digitale</option>
                    <option value="Création de site web">Création de site web (vitrine, e-commerce…)</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Décrivez votre besoin *</label>
                <textarea
                  id="message" name="message" rows="5"
                  placeholder="Expliquez votre situation, vos contraintes, votre infrastructure actuelle…"
                  value={fields.message} onChange={handleChange}
                  className={errors.message ? 'invalid' : ''}
                />
              </div>

              {serverError && <p className="form-error">{serverError}</p>}

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                <span>{loading ? 'Envoi en cours…' : 'Envoyer ma demande'}</span>
                {!loading && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                )}
              </button>
              <p className="form-note">* Champs obligatoires — Devis gratuit — Réponse sous 24h</p>
            </form>
          )}

          <div className="contact-info">
            <h3>Contactez-moi directement</h3>
            <p className="contact-info-sub">
              Disponible pour tout type d'intervention, du simple dépannage au projet d'infrastructure complet.
            </p>
            {INFO_ITEMS.map(item => (
              <div key={item.label} className="info-item">
                <div className="info-icon">{item.icon}</div>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
            <div className="contact-guarantee">
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Devis gratuit &amp; sans engagement</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Tarification transparente</span>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✓</span>
                <span>Suivi post-intervention inclus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
